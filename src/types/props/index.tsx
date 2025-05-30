type MetaDataProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}


export type { MetaDataProps, PageProps };