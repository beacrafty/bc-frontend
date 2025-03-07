import request from "@/Utils/AxiosUtils";
import { OrderStatusAPI } from "@/Utils/AxiosUtils/API";
import { showMonthWiseDate } from "@/Utils/CustomFunctions/DateFormate";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const DetailStatus = ({ data }) => {
  const { data: orderStatus } = useQuery([OrderStatusAPI], () => request({ url: OrderStatusAPI }), {
    enabled: true,
    refetchOnWindowFocus: false,
    select: (res) => res?.data?.data,
  });
  const imageObj = {
    processing: "/assets/svg/tracking/processing.svg",
    pending: "/assets/svg/tracking/pending.svg",
    shipped: "/assets/svg/tracking/shipped.svg",
    delivered: "/assets/svg/tracking/delivered.svg",
    outfordelivery: "/assets/svg/tracking/out-for-delivery.svg",
    cancelled: "/assets/svg/tracking/cancelled.svg",
  };
  const ModifyWord = (value) => {
    return value
      .split(/[-_]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const getClassName = (elem) => {
    if ((elem?.sequence >= data?.order_status?.sequence && data?.order_status?.slug === "cancelled") || elem?.slug === "cancelled" || (data?.is_digital_only && (elem?.slug === "shipped" || elem?.slug === "out-for-delivery"))) {
      return "d-none";
    }
    if (elem?.sequence <= data?.order_status?.sequence) {
      return "active";
    }
    return "";
  };

  return (
    <div className="mb-4">
      <div className="tracking-panel">
        {data && !data?.sub_orders?.length ? (
          <ul>
            {orderStatus?.length > 0 &&
              orderStatus?.map((elem, i) => (
                <li key={i} className={getClassName(elem)}>
                  <div className="panel-content">
                    <div className="icon">
                      {elem?.slug && (
                        <Image
                          src={elem?.slug === "out-for-delivery" ? imageObj["outfordelivery"] : imageObj[elem?.slug]}
                          className="img-fluid"
                          alt={elem?.slug}
                          height={44}
                          width={44}
                        />
                      )}
                    </div>
                    <div>
                      <div className="status">{ModifyWord(elem?.name)}</div>
                      <div className="panel-content">{showMonthWiseDate(data?.created_at)}</div>
                    </div>
                  </div>
                </li>
              ))}
            {data?.order_status?.slug === "cancelled" && (
              <li className="active cancelled-box">
                <div className="panel-content">
                  <div className="icon">
                    {imageObj[data?.order_status?.slug] && (
                      <Image
                        src={imageObj[data?.order_status?.slug]}
                        className="img-fluid"
                        alt="image"
                        height={44}
                        width={44}
                      />
                    )}
                  </div>
                  <div className="status">{ModifyWord(data?.order_status.name)}</div>
                </div>
              </li>
            )}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default DetailStatus;
