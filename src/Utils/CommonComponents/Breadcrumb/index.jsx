import { useTranslation } from "react-i18next";
import { Breadcrumb, Container } from "reactstrap";
import Link from "next/link";

const Breadcrumbs = ({ mainHeading, subNavigation, subTitle, title }) => {
  const { t } = useTranslation("common");
  return (
    <div className="breadcrumb-section">
      <Container>
        <h2>{t(title?.replaceAll("-", " "))}</h2>
        <nav className="theme-breadcrumb">
          <Breadcrumb>
            <div className="breadcrumb-item active">
              <Link href="/"> {t("Home")} </Link>
            </div>
            {subNavigation?.map((result, i) => (
              <div key={i} className="breadcrumb-item active ">
                <Link href={result?.path || "/"}> {t(result?.name?.replaceAll("-", " "))} </Link>
              </div>
            ))}
          </Breadcrumb>
        </nav>
      </Container>
    </div>
  );
};

export default Breadcrumbs;
