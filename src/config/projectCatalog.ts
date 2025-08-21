export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Commercial' | 'Utility-scale' | 'Community' | 'Residential';
  capacity: string;
  location: string;
  completionYear: number;
  image: string;
  status: 'completed' | 'in-progress' | 'planned';
  client?: string;
  co2Savings?: string;
  specifications?: {
    panelType?: string;
    inverterType?: string;
    mountingSystem?: string;
    annualYield?: string;
    roi?: string;
  };
}

export const projectCatalog: Project[] = [
  {
    id: 'shandong-tech-1-75mw',
    title: 'Shandong Technology Company 1.75MW',
    description: 'Rooftop Distributed PV Project',
    category: 'Commercial',
    capacity: '1.75MW',
    location: 'Shandong, China',
    completionYear: 2023,
    image: '/lovable-uploads/1ef6150b-d442-4719-8f0e-0a7c7f62df97.png',
    status: 'completed',
    co2Savings: '1,890 tons/year',
    specifications: {
      annualYield: '2,450,000 kWh',
      panelType: 'Monocrystalline Silicon',
      mountingSystem: 'Rooftop Ballasted'
    }
  },
  {
    id: 'shandong-company-1-75mw',
    title: 'Shandong Company 1.75MW',
    description: 'Rooftop Distributed PV Project',
    category: 'Commercial',
    capacity: '1.75MW',
    location: 'Shandong, China',
    completionYear: 2023,
    image: '/lovable-uploads/82147e90-c7f1-4a59-baa2-1c2481aca1f0.png',
    status: 'completed',
    co2Savings: '1,890 tons/year',
    specifications: {
      annualYield: '2,450,000 kWh',
      panelType: 'Monocrystalline Silicon'
    }
  },
  {
    id: 'shandong-company-3-16mw',
    title: 'Shandong Company 3.16MW',
    description: 'Rooftop Distributed PV Project',
    category: 'Commercial',
    capacity: '3.16MW',
    location: 'Shandong, China',
    completionYear: 2023,
    image: '/lovable-uploads/be81870f-8fc1-48a4-95eb-3cbc3ead7fce.png',
    status: 'completed',
    co2Savings: '3,420 tons/year',
    specifications: {
      annualYield: '4,420,000 kWh',
      panelType: 'Monocrystalline Silicon'
    }
  },
  {
    id: 'shandong-zeyu-3-2mw',
    title: 'Shandong Zeyu New Energy 3.2MW',
    description: 'Rooftop Distributed PV Project',
    category: 'Commercial',
    capacity: '3.2MW',
    location: 'Shandong, China',
    completionYear: 2023,
    image: '/lovable-uploads/9b7855ff-1769-4a1e-9802-f8420e493700.png',
    status: 'completed',
    co2Savings: '3,460 tons/year',
    specifications: {
      annualYield: '4,480,000 kWh'
    }
  },
  {
    id: 'shandong-new-energy-3-3mw',
    title: 'Shandong New Energy 3.3MW',
    description: 'Rooftop Distributed PV Project',
    category: 'Commercial',
    capacity: '3.3MW',
    location: 'Shandong, China',
    completionYear: 2023,
    image: '/lovable-uploads/39ceb9a9-5483-4d13-b2d4-2cea27568329.png',
    status: 'completed',
    co2Savings: '3,570 tons/year'
  },
  {
    id: 'shandong-new-energy-4mw',
    title: 'Shandong New Energy 4MW',
    description: 'Rooftop Distributed PV Project',
    category: 'Commercial',
    capacity: '4MW',
    location: 'Shandong, China',
    completionYear: 2023,
    image: '/lovable-uploads/41819b5c-ab2d-454a-b674-b17e8adb9cf2.png',
    status: 'completed',
    co2Savings: '4,320 tons/year'
  },
  {
    id: 'shandong-yiqian-4-2mw',
    title: 'Shandong Yiqian New Energy 4.2MW',
    description: 'Rooftop Distributed PV Project',
    category: 'Commercial',
    capacity: '4.2MW',
    location: 'Shandong, China',
    completionYear: 2023,
    image: '/lovable-uploads/77a73b5e-f017-4068-896a-90f6fb279f16.png',
    status: 'completed',
    co2Savings: '4,540 tons/year'
  },
  {
    id: 'shandong-zexuan-4-98mw',
    title: 'Shandong Zexuan New Energy 4.98MW',
    description: 'Rooftop Distributed PV Project',
    category: 'Commercial',
    capacity: '4.98MW',
    location: 'Shandong, China',
    completionYear: 2023,
    image: '/lovable-uploads/5bef1146-460f-4b41-a4ea-f8cc08763d56.png',
    status: 'completed',
    co2Savings: '5,380 tons/year'
  },
  {
    id: 'weifang-new-energy-9mw',
    title: 'Weifang New Energy Company 9MW',
    description: 'Rooftop Distributed PV Project',
    category: 'Commercial',
    capacity: '9MW',
    location: 'Weifang, China',
    completionYear: 2023,
    image: '/lovable-uploads/2ee13fb0-2fc4-4093-bfdb-eeabf982dfa8.png',
    status: 'completed',
    co2Savings: '9,720 tons/year'
  },
  {
    id: 'weifang-district-26mw',
    title: 'Weifang District 26MW',
    description: 'Ground Power Station',
    category: 'Utility-scale',
    capacity: '26MW',
    location: 'Weifang, China',
    completionYear: 2023,
    image: '/lovable-uploads/088addd1-5195-4428-ae4d-8ff5fa602284.png',
    status: 'completed',
    co2Savings: '28,080 tons/year'
  },
  {
    id: 'huanghua-town-637kw',
    title: 'Immigrant Villages of Huanghua Town 637.1kW',
    description: 'Community Solar Project',
    category: 'Community',
    capacity: '637.1kW',
    location: 'Huanghua Town, China',
    completionYear: 2023,
    image: '/lovable-uploads/5853f1c2-b2da-485b-bf06-3679b375d4b3.png',
    status: 'completed',
    co2Savings: '688 tons/year'
  },
  {
    id: 'sunbelt-group-221kw',
    title: 'Sunbelt Group 221kW Grid-tied PV Project',
    description: 'Commercial Solar Installation',
    category: 'Commercial',
    capacity: '221kW',
    location: 'Kano State, Nigeria',
    completionYear: 2022,
    image: '/lovable-uploads/99924a3f-561a-47fd-8d99-2ffa6b3031c5.png',
    status: 'completed',
    client: 'Sunbelt Group',
    co2Savings: '239 tons/year',
    specifications: {
      annualYield: '360,000 kWh',
      roi: '< 2 years'
    }
  },
  {
    id: 'qingdao-energy-1-49mw',
    title: 'Qingdao Energy Company 1.49MW',
    description: 'Rooftop Distributed PV Project',
    category: 'Commercial',
    capacity: '1.49MW',
    location: 'Qingdao, China',
    completionYear: 2023,
    image: '/lovable-uploads/8df34e49-93cb-46ff-8f28-47f6db8de0c0.png',
    status: 'completed',
    co2Savings: '1,610 tons/year'
  }
];

export const projectCategories = [
  'All',
  'Commercial',
  'Utility-scale',
  'Community',
  'Residential'
] as const;

export const projectStats = {
  totalProjects: projectCatalog.length,
  totalCapacity: projectCatalog.reduce((sum, project) => {
    const capacity = parseFloat(project.capacity.replace(/[^\d.]/g, ''));
    const unit = project.capacity.includes('kW') ? 0.001 : 1;
    return sum + (capacity * unit);
  }, 0),
  totalCO2Savings: projectCatalog.reduce((sum, project) => {
    if (!project.co2Savings) return sum;
    const savings = parseFloat(project.co2Savings.replace(/[^\d.]/g, ''));
    return sum + savings;
  }, 0),
  countries: ['Nigeria', 'China'],
  completedProjects: projectCatalog.filter(p => p.status === 'completed').length
};