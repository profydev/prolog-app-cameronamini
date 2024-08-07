import { useGetHomeData } from "../api/use-get-homeData";
import styles from "./hero.module.scss";

export function Hero() {
  const { data, isLoading, isError, error } = useGetHomeData();

  // seperate subheader text into two lines
  const subheaderSections = data?.sections[0].subtitle?.split(".");

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    console.error(error);
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.heroContainer}>
      <div className={styles.container}>
        <h1 className={styles.header}>{data.sections[0].title}</h1>
        <div className={styles.subheaderContainer}>
          <p className={styles.subheader}>{subheaderSections?.[0]}</p>
          <p className={styles.subheader}>{subheaderSections?.[1]}</p>
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${data.sections[0].image?.src}`}
        alt="hero"
        className={styles.heroImage}
      />
    </div>
  );
}
