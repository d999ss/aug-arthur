import type { Leader } from '@/lib/validators';

export const leaders: Leader[] = [
  {
    name: "John Arthur",
    title: "CEO",
    bio: "John leads Arthur Companies with over 25 years of experience in agricultural business and innovation. A fourth-generation member of the Arthur family, he holds an MBA from Stanford and previously worked in agricultural technology venture capital. John has led the company through its digital transformation and expansion into research and development services.",
    expertise: ["Strategic Growth", "Agricultural Innovation", "Family Business Leadership"],
    education: "MBA, Stanford University"
  },
  {
    name: "Sarah Mitchell",
    title: "COO",
    bio: "Sarah oversees daily operations and strategic initiatives across all Arthur Companies divisions. With 18 years at Arthur and previous experience at Cargill, she has deep expertise in agricultural supply chain optimization and operational excellence. Sarah has been instrumental in modernizing the company's logistics systems and expanding its service footprint.",
    expertise: ["Operations Management", "Supply Chain Optimization", "Strategic Planning"],
    education: "BS Agricultural Economics, North Dakota State University"
  },
  {
    name: "Dr. Michael Chen",
    title: "CTO",
    bio: "Dr. Chen leads our innovation and technology development efforts, driving digital transformation across all business units. With a Ph.D. in Agricultural Engineering and previous roles at John Deere and Microsoft, he brings unique cross-industry expertise in agricultural technology. Michael has pioneered several of our precision agriculture tools and leads our venture investment committee.",
    expertise: ["Precision Agriculture", "Data Science", "AgTech Innovation"],
    education: "Ph.D. Agricultural Engineering, Cornell University"
  }
];
