export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  alt: string;
  specs?: ProductSpec[];
  features?: string[];
  applications?: string[];
  introduction?: string;
  workingPrinciple?: string;
  premiumMaterials?: string[];
  optionalAccessories?: string[];
  aliases?: string[];
  brochureId?: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  slug: string;
  products: Product[];
}

export const PRODUCT_CATALOG: ProductCategory[] = [
  {
    id: 'solar-water-heater',
    title: 'Solar Water Heater',
    slug: 'solar-water-heater',
    products: [
      {
        id: 'compact-non-pressure',
        slug: 'compact-non-pressure',
        title: 'Compact Non-Pressure',
        shortDescription: 'The most cost-effective and environmentally friendly way to harness solar energy for hot water applications, available with 50-500L tank.',
        image: '/lovable-uploads/5975e5c4-eb5e-4d0b-8b70-b2b9a88fbc6d.png',
        alt: 'Compact non-pressure solar water heater system',
        introduction: 'The Non pressure galvanized solar water heater is the most cost-effectiveness and environmentally friendly way to harness solar energy for hot water applications, which is unsurpassed by any other solar thermal products, for its most high efficiency, low cost and easy installation.',
        workingPrinciple: 'Using thermosiphon system - depending on the different density of hot water and cold water, a water flowing cycle is created in tubes, hot water raising up automatically and the cold water flowing in the bottom, we call it as the gravity system too.',
        specs: [
          { label: 'Capacity', value: '50L-500L' },
          { label: 'Inner Tank', value: 'Stainless steel SS304-2B / SS316L' },
          { label: 'Outer Tank', value: 'Galvanized steel /SS304/SS201' },
          { label: 'Insulation', value: 'Polyurethane foam, 41 kg/m³ high density' },
          { label: 'Support', value: 'Painted galvanized steel' },
          { label: 'Vacuum Tube', value: 'Borosilicate glass 3.3, ALN/AIN-SS/CU coating, Ф58x1800mm' }
        ],
        features: [
          'Adopt most economic material (outer tank and support)',
          'Most reliable, cost saving, efficient hot water heating solution',
          'Simple structure, easy installation, labor cost saving',
          'Automatic operation with intelligent controller',
          'Low maintenance cost'
        ],
        premiumMaterials: [
          'Inner tank: Stainless steel SS304-2B / SS316L',
          'Outer tank: Galvanized steel /SS304/SS201',
          'Insulation layer: Polyurethane foam, 41 kg/m³ high density',
          'Support: Painted galvanized steel',
          'Vacuum tube: Borosilicate glass 3.3, ALN/AIN-SS/CU coating, Ф58x1800mm',
          'Capacity: 50L-500L'
        ],
        optionalAccessories: [
          'Electric Heating Element (1.5/2.0 kW)',
          'Smart Controller with temperature display',
          'Magnesium Anode Rod (extends tank life)'
        ],
        applications: [
          'Residential homes',
          'Small businesses',
          'Rural areas',
          'Cost-conscious installations'
        ],
        brochureId: 'solar-water-heater'
      },
      {
        id: 'compact-pressurized-heat-pipe',
        slug: 'compact-pressurized-heat-pipe',
        title: 'Compact Pressurized Heat Pipe',
        shortDescription: 'Integrated solar thermal systems designed to deliver pressurized hot water with heat pipe technology, ideal for residential applications.',
        image: '/lovable-uploads/62b1740b-613a-4a2c-9b1a-479e27898872.png',
        alt: 'Compact pressurized heat pipe solar water heater',
        introduction: 'Tanso Heat Pipe Solar Water Heaters are integrated solar thermal systems designed to deliver pressurized hot water. Ideal for residential applications, they provide a sustainable, easy-to-install, high-efficiency, and reliable solar hot water solution.',
        workingPrinciple: 'The vacuum tube absorb solar energy and convert solar energy into thermal energy, then transfer to the central heat pipe via the aluminum fin. The heat pipe have tiny amount of purified water sealed inside at depressurized condition. When heated, the water inside the heat pipes vaporizes at low temperature (about 25°C), the vapor rises to the condenser and heat energy is conducted to water (inside the tank). When vapor is cooled down, and becomes condensate, falling back to the bottom of heat pipe. By continuously circulating in this way, heat is carried from outside to the water inside the tank.',
        specs: [
          { label: 'Capacity', value: '100L-300L' },
          { label: 'Maximum Working Pressure', value: '6 bar (87 psi)' },
          { label: 'Insulation', value: '50mm High-Density Polyurethane Foam' },
          { label: 'Vacuum Tube', value: 'Borosilicate glass 3.3, ALN/AIN-SS/CU coating, Ф58x1800mm' },
          { label: 'Low Temperature Resistance', value: 'Can be used in -50°C condition' }
        ],
        features: [
          'Simplified Installation & Maintenance',
          'High pressure system, directly connected with city water without booster pump',
          'Rapid Start-up & High Efficiency: Quick system activation, excellent energy yield, and minimal heat loss',
          'Low temperature resistance, can be used in -50°C condition',
          'Easy to replace individual tube in the event of tube damaged',
          '10-Year Warranty'
        ],
        premiumMaterials: [
          'Vacuum tube: Borosilicate glass 3.3, ALN/AIN-SS/CU coating, Ф58x1800mm',
          'Heat Pipes: High-Purity Copper',
          'Heat Transfer Fins: Aluminum',
          'Inner Tank: Food-Grade 304 Stainless Steel (SUS304-28) or 316L Stainless Steel',
          'Outer Casing: 304 / 201 Stainless Steel / 430 BA Stainless Steel / Pre-painted Galvanized Steel',
          'Insulation: 50mm High-Density Polyurethane Foam',
          'Mounting Frame: 201 / 304 Stainless Steel / Pre-painted Galvanized Steel / Aluminum Alloy'
        ],
        optionalAccessories: [
          'Electric Heating Element (Immersion Heater)',
          'Pressure & Temperature Relief Valve (PTRV)',
          'Magnesium Anode Rod, Non-Return, Check Valve'
        ],
        applications: [
          'Modern homes',
          'Hotels',
          'Apartments',
          'Commercial facilities'
        ]
      },
      {
        id: 'heat-pipe-solar-collector',
        slug: 'heat-pipe-solar-collector',
        title: 'Heat Pipe Solar Collector',
        shortDescription: 'Heat pipe solar thermal collectors for room heating, commercial water heating systems, and domestic applications with superior efficiency.',
        image: '/lovable-uploads/36c07050-4ae9-4c6f-91d2-fe9804ef8e2a.png',
        alt: 'Heat pipe solar collector water heater system',
        aliases: ['solar-collector-heat'],
        introduction: 'Heat Pipe Solar Collector systems are always connected with existing water heating devices. Perfect for room heating, large scale commercial solar water heating systems, domestic water heating, and old heating equipment/system retrofit.',
        workingPrinciple: 'The selective absorber coating on the inner cover of vacuum tubes absorb solar energy, then convert solar energy into thermal energy and transfer thermal energy to heat pipe by aluminum fin. The heated liquid inside heat pipe change into vapor which rises to the top condenser, then thermal energy heat transfer liquid pass through heat exchanger and the cooled vapor becomes liquid, returning to the base of heat pipe.',
        specs: [
          { label: 'Efficiency', value: 'η₀ = 0.638 (aperture area)' },
          { label: 'Working Pressure', value: '0.6MPa' },
          { label: 'Max. Working Pressure', value: '1.2MPa' },
          { label: 'Ambient Temperature', value: '>=-50°C' },
          { label: 'Vacuum Tube', value: 'Borosilicate glass 3.3, ALN/AIN-SS/CU coating, Ф58x1800mm' },
          { label: 'Heat Pipe Condenser', value: 'Ф14mm red copper' },
          { label: 'Heat Pipe', value: 'Ф8mm red copper' },
          { label: 'Inlet/Outlet', value: 'Ф22mm (3/4 and 1 inch)' }
        ],
        features: [
          'Higher efficiency η₀ = 0.638 (aperture area)',
          'Low temperature resistance, heat pipe freeze protected, even can work under -50°C ambient, so can be used all year round in cold climate area',
          'No water inside vacuum tube, so vacuum tube will not break in the winter frozen weather',
          'In the event of a tube damaged, the whole system will still keep working, just remove and replace, low cost',
          'Combined with building perfectly, ideal for slope roof or flat roof installation',
          'It can be combined with existing water heating device easily',
          'Tube can be replaced without draining solar fluid',
          'Significant advantages over flat plate',
          'Low maintenance'
        ],
        premiumMaterials: [
          'Vacuum tube: Borosilicate glass 3.3, ALN/AIN-SS/CU coating, Ф58x1800mm',
          'Heat pipe condenser: Ф14mm red copper',
          'Heat pipe: Ф8mm red copper',
          'Heat transfer fin: Integrated aluminum fin',
          'Manifold casing: Aluminium alloy 6063-TS',
          'Main tube: Ф27*1mm; Risers: @16*1mm',
          'Inlet/outlet: Ф22mm (3/4 and 1inch)',
          'Insulation layer: Polyurythan+Infrared reflective film+Glass Wool',
          'Frame: Aluminium alloy',
          'Working pressure: 0.6MPa',
          'Max. working pressure: 1.2MPa',
          'Ambient temperature: >=-50°C'
        ],
        applications: [
          'Room heating',
          'Large scale commercial solar water heating system',
          'Domestic water heating',
          'Old heating equipment/system retrofit'
        ]
      }
    ]
  },
  {
    id: 'low-voltage-battery',
    title: 'Low Voltage Energy Storage Inverters',
    slug: 'low-voltage-battery',
    products: [
      {
        id: 's6-eh1p-3-8k-l-plus',
        slug: 's6-eh1p-3-8k-l-plus',
        title: 'Single Phase Low Voltage S6-EH1P (3-8)K-L-PLUS',
        shortDescription: 'New PLUS model provides solutions for demanding power scenarios with generator compatibility and microgrid formation capabilities.',
        image: '/lovable-uploads/96506ab6-7564-4dea-b1cb-385e84b56d19.png',
        alt: 'Single Phase Low Voltage Energy Storage Inverter S6-EH1P PLUS',
        introduction: 'The S6-EH1P (3-8)K-L-PLUS series represents the latest advancement in single-phase low voltage energy storage inverters. This new PLUS model provides comprehensive solutions for demanding power scenarios, offering enhanced capabilities for residential and commercial applications.',
        workingPrinciple: 'The inverter converts DC power from solar panels and batteries into AC power for household use. During grid outages, it automatically switches to backup mode, providing seamless power transitions. The system can operate in multiple modes: grid-tie, off-grid, and hybrid, optimizing energy usage based on real-time conditions.',
        specs: [
          { label: 'Power Range', value: '3kW-8kW' },
          { label: 'Type', value: 'Single Phase' },
          { label: 'Overload Capability', value: '200% for 10 seconds' },
          { label: 'Switchover Time', value: '< 4ms' },
          { label: 'Grid Connection', value: 'Low Voltage' },
          { label: 'Models', value: 'S6-EH1P3K-L-PLUS, S6-EH1P3.6K-L-PLUS, S6-EH1P4.6K-L-PLUS, S6-EH1P5K-L-PLUS, S6-EH1P6K-L-PLUS, S6-EH1P8K-L-PLUS' }
        ],
        features: [
          'Generator-compatible to extend backup duration during grid power outage',
          'Multiple inverters can operate together to form a microgrid',
          'Supports dual backup ports for intelligent control of critical and non-critical loads',
          '10 seconds of 200% overload capability',
          'Automatic switchover time is < 4ms, providing seamless transitions from grid to backup',
          'Ensures excellent power supply stability, keeping the load unaffected by a weak grid or generator supply fluctuations'
        ],
        applications: [
          'Residential homes',
          'Small commercial buildings',
          'Critical load backup',
          'Microgrid applications'
        ]
      },
      {
        id: 's6-eh1p-12-16k-nv-yd-l',
        slug: 's6-eh1p-12-16k-nv-yd-l',
        title: 'Single Phase Low Voltage S6-EH1P (12-16)K03-NV-YD-L',
        shortDescription: 'High-power single phase inverter with 20A maximum input current, ideal for all high-power PV modules and up to 290A battery current.',
        image: '/lovable-uploads/ae9a6e51-a5ee-4b46-8fe7-825163e436dd.png',
        alt: 'Single Phase Low Voltage Energy Storage Inverter S6-EH1P 12-16K',
        introduction: 'The S6-EH1P (12-16)K03-NV-YD-L series offers high-power single-phase energy storage solutions with advanced battery management capabilities. Designed for demanding applications requiring high current handling and superior grid stability.',
        workingPrinciple: 'Advanced power conversion technology enables high-efficiency DC to AC conversion while supporting maximum input currents up to 20A. The intelligent battery management system handles up to 290A charge/discharge current, optimizing energy storage and distribution based on grid conditions and load requirements.',
        specs: [
          { label: 'Power Range', value: '12kW-16kW' },
          { label: 'Type', value: 'Single Phase' },
          { label: 'Maximum Input Current', value: '20A' },
          { label: 'Battery DC Current', value: 'Up to 290A charge/discharge' },
          { label: 'Overload Capability', value: '200% for 10 seconds' },
          { label: 'Switchover Time', value: '< 4ms' }
        ],
        features: [
          'Generator-compatible to extend backup duration during grid power outage',
          'Multiple inverters can operate together to form a microgrid',
          'Supports dual backup ports for intelligent control of critical and non-critical loads',
          '10 seconds of 200% overload capability',
          'Automatic switch over time is <4ms, providing seamless transitions from grid to backup',
          'Supports a maximum input current of 20A, making it ideal for all high-power PV modules of any brand',
          'Ensures excellent power supply stability, keeping the load unaffected by a weak grid or generator supply fluctuations',
          'The battery\'s DC side can handle a maximum charge/discharge current of up to 290A, allowing it to store more surplus energy generated by PV systems'
        ],
        applications: [
          'Large residential installations',
          'Commercial applications',
          'High-power PV systems',
          'Energy storage systems'
        ]
      },
      {
        id: 's6-eh3p-8-15k-nv-yd-l',
        slug: 's6-eh3p-8-15k-nv-yd-l',
        title: 'Three Phase Low Voltage S6-EH3P (8-15)K02-NV-YD-L',
        shortDescription: 'Three-phase energy storage inverter supporting unbalanced loads and half-wave loads on both grid and backup ports with 290A battery current capability.',
        image: '/lovable-uploads/e2fdb118-678b-4f55-a414-f4b57bed1112.png',
        alt: 'Three Phase Low Voltage Energy Storage Inverter S6-EH3P',
        introduction: 'The S6-EH3P (8-15)K02-NV-YD-L series provides robust three-phase energy storage solutions with advanced load balancing capabilities. This system is engineered to handle complex load scenarios while maintaining optimal performance across all three phases.',
        workingPrinciple: 'Three-phase power conversion technology ensures balanced power delivery across all phases while accommodating unbalanced and half-wave loads. The advanced control system manages power flow between grid, battery, and loads, providing stable operation even under challenging grid conditions.',
        specs: [
          { label: 'Power Range', value: '8kW-15kW' },
          { label: 'Type', value: 'Three Phase' },
          { label: 'Maximum Input Current', value: '20A' },
          { label: 'Battery DC Current', value: 'Up to 290A charge/discharge' },
          { label: 'Models', value: 'S6-EH3P8K02-NV-YD-L, S6-EH3P10K02-NV-YD-L, S6-EH3P12K02-NV-YD-L, S6-EH3P15K02-NV-YD-L' },
          { label: 'Load Support', value: 'Unbalanced and Half-Wave Loads' }
        ],
        features: [
          'Generator-compatible to extend backup duration during grid power outage',
          'Multiple inverters can operate together to form a microgrid',
          'Supports dual backup ports for intelligent control of critical and non-critical loads',
          '10 seconds of 200% overload capability',
          'Supports a maximum input current of 20A, making it ideal for all high-power PV modules of any brand',
          'Ensures excellent power supply stability, keeping the load unaffected by a weak grid or generator supply fluctuations',
          'The battery\'s DC side can handle a maximum charge/discharge current of up to 290A, allowing it to store more surplus energy generated by PV systems',
          'Supports Unbalanced and Half-Wave Loads on both the Grid and Backup Port'
        ],
        applications: [
          'Three-phase commercial systems',
          'Industrial applications',
          'Complex load environments',
          'Large-scale energy storage'
        ]
      }
    ]
  },
  {
    id: 'high-voltage-energy-storage',
    title: 'High Voltage Energy Storage',
    slug: 'high-voltage-energy-storage',
    products: [
      {
        id: 'ts-hv280r',
        slug: 'ts-hv280r',
        title: 'Rack Module High voltage ESS TS-HV280R',
        shortDescription: 'Smaller footprint, higher energy density LFP technology with expandable module design. Maximum 5.12kWh per module with 12S×10P configuration.',
        image: '/lovable-uploads/54c8ad97-76a2-45ca-a2c4-ca58b282e0d5.png',
        alt: 'Rack Module High voltage ESS TS-HV280R battery storage system',
        introduction: 'The TS-HV280R Rack Module High voltage ESS combines advanced LFP technology with modular design for maximum flexibility and efficiency. This system offers superior energy density in a compact footprint.',
        workingPrinciple: 'The system utilizes advanced lithium iron phosphate (LFP) battery technology in a modular rack configuration. Each module provides 5.12kWh capacity and can be expanded up to 12S×10P configuration for scalable energy storage solutions.',
        specs: [
          { label: 'Model', value: 'TS-HV280R' },
          { label: 'Module Capacity', value: '5.12kWh' },
          { label: 'Configuration', value: '12S×10P' },
          { label: 'Technology', value: 'Latest LFP (Lithium Iron Phosphate)' },
          { label: 'Design', value: 'Expandable Module Design' },
          { label: 'Monitoring', value: 'Real-time charging/discharging monitoring' }
        ],
        features: [
          'Smaller footprint design',
          'Higher energy density benefit from latest LFP technology',
          'Expandable module design',
          'Maximum 5.12kWh per module with 12S×10P configuration',
          'Real-time monitoring of battery charging and discharging',
          'Online system updates and maintenance',
          'Cell balance protection',
          'Over charge protection',
          'Over current protection',
          'Voltage protection',
          'Over discharge protection',
          'Short-circuit protection',
          'Temperature protection',
          'Soft start function'
        ],
        applications: [
          'Residential energy storage',
          'Commercial energy storage',
          'Grid-tied systems',
          'Backup power applications'
        ]
      },
      {
        id: 'all-in-one-hybrid-ess',
        slug: 'all-in-one-hybrid-ess',
        title: 'All-in-one Hybrid Energy Storage System',
        shortDescription: 'Air cooling energy storage system for various scenarios including big villas, charging stations, supermarkets, farms and factories with microgrid capabilities.',
        image: '/lovable-uploads/1b14f18d-10fb-41b8-80e2-15421e44d07d.png',
        alt: 'All-in-one Hybrid Energy Storage System with air cooling',
        introduction: 'The All-in-one air cooling energy storage system is designed for various scenarios like big villa, charging stations, supermarkets, farms and factories. This system supports various application modes such as self-consumption, time-of-use, and backup mode, alongside flexible load control.',
        workingPrinciple: 'By seamlessly integrating with diesel generators to build microgrids, it ensures flexibility, enhanced efficiency, safety, and profitability in any setting. The system combines EMS, hybrid inverter and BMS integration technology with power supply redundancy design.',
        specs: [
          { label: 'System Type', value: 'All-in-one Hybrid' },
          { label: 'Cooling', value: 'Air Cooling System' },
          { label: 'Application Modes', value: 'Self-consumption, Time-of-use, Backup mode' },
          { label: 'Integration', value: 'EMS, Hybrid Inverter, BMS' },
          { label: 'Scalability', value: 'Expandable to megawatts' },
          { label: 'Fire Suppression', value: 'Aerosol fire suppression solutions' }
        ],
        features: [
          'Overall solar + storage solution',
          'EMS, hybrid inverter and BMS integration technology',
          'Power supply redundancy design',
          'Support for black start function and off-grid operation',
          'Lithium iron phosphate batteries with aerosol fire suppression',
          'Combustible gas, smoke and temperature detection',
          'Active exhaust system',
          'Fire alarm system',
          'Flexible extension capacity expandable to megawatts',
          'Convenient outdoor setup',
          'Minimalist O&M (Operation & Maintenance)',
          'Intelligent and efficient operation',
          'Seamless diesel generator integration for microgrids'
        ],
        applications: [
          'Big villas',
          'Charging stations',
          'Supermarkets',
          'Farms',
          'Factories',
          'Commercial facilities',
          'Microgrid applications'
        ]
      },
      {
        id: 'ts-hv100s',
        slug: 'ts-hv100s',
        title: 'High Voltage Stacked Residential ESS TS-HV100S',
        shortDescription: 'Compact residential energy storage with higher energy density LFP technology, expandable module design up to 5.12kWh with real-time monitoring.',
        image: '/lovable-uploads/f43e342f-49b1-4bb5-8a17-282cd3407b2c.png',
        alt: 'High Voltage Stacked Residential ESS TS-HV100S battery system',
        introduction: 'The TS-HV100S High Voltage Stacked Residential ESS is designed specifically for residential applications, offering compact design with maximum energy efficiency and comprehensive safety features.',
        workingPrinciple: 'Utilizing advanced LFP technology in a stacked configuration, the system provides optimal energy storage for residential use with intelligent monitoring and protection systems ensuring safe and efficient operation.',
        specs: [
          { label: 'Model', value: 'TS-HV100S' },
          { label: 'Module Capacity', value: '5.12kWh' },
          { label: 'Configuration', value: '12S×10P' },
          { label: 'Technology', value: 'Latest LFP (Lithium Iron Phosphate)' },
          { label: 'Design', value: 'Stacked Residential ESS' },
          { label: 'Monitoring', value: 'Real-time charging/discharging monitoring' }
        ],
        features: [
          'Smaller footprint for residential use',
          'Higher energy density benefit from latest LFP technology',
          'Expandable module design',
          'Maximum 5.12kWh per module with 12S×10P configuration',
          'Real-time monitoring of battery charging and discharging',
          'Online system updates and maintenance',
          'Cell balance protection',
          'Over charge protection',
          'Over current protection',
          'Voltage protection',
          'Over discharge protection',
          'Short-circuit protection',
          'Temperature protection',
          'Soft start function'
        ],
        applications: [
          'Residential homes',
          'Small commercial buildings',
          'Backup power systems',
          'Solar energy storage'
        ]
      }
    ]
  }
];