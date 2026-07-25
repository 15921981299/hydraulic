import { products } from './products';

export const productSubpages = products.flatMap((product) =>
  product.subcategories.map((subcategory) => ({
    productSlug: product.slug,
    slug: subcategory.slug,
    title: subcategory.title,
    seoTitle: `${subcategory.title} from China | Hydraulic Match`,
    h1Title: subcategory.title,
    summary: subcategory.summary,
    parameterGroups: product.parameterGroups,
    applications: product.applications,
    brandReferences: product.brandReferences,
    verification: product.verification,
  })),
);
