import Head from "next/head";

type CMHeadProps = {
  title?: string;
};

export const CMHead: React.FC<CMHeadProps> = ({ title }) => (
  <Head>
    <title>{title || "Capitalmind Mutual Funds"}</title>
    <meta name="description" content="Capitalmind Mutual Funds" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);
