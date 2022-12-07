const subjects = [
  { slot: 'E1', code: 'BT202', name: 'MOLECULAR BIOLOGY' },
  { slot: 'E1', code: 'BT320', name: 'GENOMICS IN MEDICINE' },
  { slot: 'E1', code: 'CE202', name: 'MECHANICS OF SOLIDS' },
  { slot: 'E1', code: 'CH312', name: 'Polymer Processing Techniques' },
  { slot: 'E1', code: 'CO202', name: 'DATABASE MANAGEMENT SYSTEMS' },
  { slot: 'E1', code: 'CO306', name: 'COMPUTER NETWORKS' },
  { slot: 'E1', code: 'CO324', name: 'PATTERN RECOGNITION' },
  { slot: 'E1', code: 'EC310', name: 'TESTING AND DIAGNOSIS OF DIGITAL SYSTEM DESIGN' },
  { slot: 'E1', code: 'EC314', name: 'RF DESIGN' },
  { slot: 'E1', code: 'EE308', name: 'POWER SYSTEM OPERATION AND CONTROL' },
  { slot: 'E1', code: 'EE314', name: 'POWER ELECTRONIC APPLICATIONS TO POWER SYSTEMS' },
  { slot: 'E1', code: 'EE408', name: 'RESTRUCTURED POWER SYSTEM' },
  { slot: 'E1', code: 'EE418', name: 'SELECTED TOPICS IN POWER ELECTRONICS' },
  { slot: 'E1', code: 'EE448', name: 'BIG DATA ANALYTICS' },
  { slot: 'E1', code: 'EP308', name: 'LASER AND INSTRUMENTATION' },
  { slot: 'E1', code: 'HU312', name: 'Microeconomics' },
  { slot: 'E1', code: 'IT312', name: 'CYBER FORENSICS' },
  { slot: 'E1', code: 'IT316', name: 'HIGH SPEED NETWORKS' },
  { slot: 'E1', code: 'IT420', name: 'COMPUTER VISION' },
  { slot: 'E1', code: 'MBAMK224', name: 'CUSTOMER RELATIONSHIP MANAGEMENT' },
  { slot: 'E1', code: 'MBEALS1', name: 'Action Learning Segment-1' },
  { slot: 'E1', code: 'MC432', name: 'FUZZY SET AND FUZZY LOGIC' },
  { slot: 'E1', code: 'ME314', name: 'MECHANICAL VIBRATIONS' },
  { slot: 'E1', code: 'ME316', name: 'POWER PLANT ENGINEERING' },
  { slot: 'E1', code: 'ME318', name: 'COMPUTER AIDED MANUFACTURING' },
  { slot: 'E1', code: 'PE308', name: 'GREEN ENERGY TECHNOLOGY' },
  { slot: 'E1', code: 'SE202a', name: 'Object Oriented Software Engineering' },
  { slot: 'E1', code: 'SE326', name: 'Machine Learning' },

  { slot: 'E2', code: 'AE320', name: 'TRIBOLOGY AND LUBRICATION' },
  { slot: 'E2', code: 'AE420', name: 'VEHICLE SAFETY ENGINEERING' },
  { slot: 'E2', code: 'BBA211', name: 'Human Resource Management' },
  { slot: 'E2', code: 'BT308', name: 'STEM CELL AND REGENERATIVE MEDICINE' },
  { slot: 'E2', code: 'BT426', name: 'ENVIRONMENTAL BIOTECHNOLOGY' },
  { slot: 'E2', code: 'CO204', name: 'OPERATING SYSTEMS DESIGN' },
  { slot: 'E2', code: 'CO318', name: 'ADVANCED DATABASE MANAGEMENT SYSTEM'  },
  { slot: 'E2', code: 'EC316', name: 'WIRELESS SENSOR NETWORKS' },
  { slot: 'E2', code: 'EC320', name: 'SOFT COMPUTING' },
  { slot: 'E2', code: 'EE310', name: 'COMMUNICATION SYSTEMS' },
  { slot: 'E2', code: 'EE318', name: 'SWITCHED MODE POWER SUPPLIES' },
  { slot: 'E2', code: 'EE326', name: 'PROCESS INSTRUMENTATION &amp CONTROL' },
  { slot: 'E2', code: 'EE416', name: 'GRID INTEGRATION OF RENEWABLE ENERGY SOURCE' },
  { slot: 'E2', code: 'EE420', name: 'POWER QUALITY' },
  { slot: 'E2', code: 'EE446', name: 'DATA COMMUNICATION AND COMPUTER NETWORKS' },
  { slot: 'E2', code: 'EN204', name: 'WATER ENGINEERING: DESIGN &amp APPLICATION' },
  { slot: 'E2', code: 'EP314', name: 'INSTRUMENTATION AND CONTROL' },
  { slot: 'E2', code: 'HU314', name: 'Rhetoric and Public Speaking' },
  { slot: 'E2', code: 'IT204', name: 'OPERATING SYSTEM' },
  { slot: 'E2', code: 'IT324a', name: 'Deep Learning' },
  { slot: 'E2', code: 'ME332', name: 'Finite Element Method' },
  { slot: 'E2', code: 'MGT-27', name: 'MANAGEMENT ACCOUNTING'  },
  { slot: 'E2', code: 'PE312', name: 'AUTOMOBILE ENGINEERING' },

  { slot: 'E3', code: 'AE310', name: 'Advance Manufacturing Technology' },
  { slot: 'E3', code: 'AE424', name: 'Mechatronics' },
  { slot: 'E3', code: 'BT206', name: 'MICROBIOLOGY' },
  { slot: 'E3', code: 'BT404', name: 'ADVANCED IN COMPUTATIONAL BIOLOGY' },
  { slot: 'E3', code: 'CE206', name: 'SOIL MECHANICS' },
  { slot: 'E3', code: 'CE310', name: 'GEO-TECHNICAL PROCESSES' },
  { slot: 'E3', code: 'CE314', name: 'TUNNEL, PORTS AND HARBOR ENGINEERING' },
  { slot: 'E3', code: 'CE316', name: 'MATRIX METHODS OF STRUCTURAL ANALYSIS' },
  { slot: 'E3', code: 'CO206', name: 'COMPUTER ORGANIZATION AND ARCHITECTURE' },
  { slot: 'E3', code: 'CO326', name: 'OBJECT ORIENTED SOFTWARE ENGINEERING' },
  { slot: 'E3', code: 'EC328', name: 'SPEECH RECOGNITION' },
  { slot: 'E3', code: 'EC330', name: 'DIGITAL IMAGE PROCESSING' },
  { slot: 'E3', code: 'EE324', name: 'Design, Estimation &amp Costing of Industrial Electrical System' },
  { slot: 'E3', code: 'EE330', name: 'Introduction to ARM Architecture' },
  { slot: 'E3', code: 'EE422', name: 'HVDC TRANSMISSION' },
  { slot: 'E3', code: 'EE440', name: 'SCADA &amp ENERGY MANAGEMENT SYSTEMS' },
  { slot: 'E3', code: 'EE442', name: 'ROBOTICS AND MACHINE VISION' },
  { slot: 'E3', code: 'EN312', name: 'ADVANCE SURVEYING' },
  { slot: 'E3', code: 'EP316', name: 'COSMOLOGY AND ASTROPHYSICS' },
  { slot: 'E3', code: 'IT328', name: 'Ethical Hacking' },
  { slot: 'E3', code: 'MBA-108', name: 'OPERATIONS AND SUPPLY CHAIN MANAGEMENT' },
  { slot: 'E3', code: 'MC312', name: 'ARTIFICIAL INTELLIGENCE' },
  { slot: 'E3', code: 'ME308', name: 'GAS DYNAMICS AND JET PROPULSION' },
  { slot: 'E3', code: 'PE418', name: 'ADVANCE MANUFACTURING PROCESSES' },
  { slot: 'E3', code: 'SE206', name: 'DATABASE MANAGEMENT SYSTEMS' },
  { slot: 'E3', code: 'SE308', name: 'Software Reliability' },

  { slot: 'E4', code: 'AE312', name: 'QUALITY MANAGEMENT &amp SIX SIGMA APPLICATIONS' },
  { slot: 'E4', code: 'AE408', name: 'REFRIGERATION &amp AUTOMOBILE AIR CONDITIONING' },
  { slot: 'E4', code: 'BT322', name: 'PROTEIN ENGINEERING' },
  { slot: 'E4', code: 'CE308', name: 'DISASTER MANAGEMENT' },
  { slot: 'E4', code: 'CE318', name: 'ANALYSIS AND DESIGN OF UNDERGROUND STRUCTURES' },
  { slot: 'E4', code: 'CH308', name: 'Food Technology' },
  { slot: 'E4', code: 'CO302', name: 'COMPILER DESIGN' },
  { slot: 'E4', code: 'CO318', name: 'ADVANCED DATABASE MANAGEMENT SYSTEMS' },
  { slot: 'E4', code: 'EC332', name: 'INFORMATION THEORY AND CODING' },
  { slot: 'E4', code: 'EC336', name: 'Flexible Electronics' },
  { slot: 'E4', code: 'EE312', name: 'Power System Optimization' },
  { slot: 'E4', code: 'EE316', name: 'ELECTRICAL ENERGY STORAGE SYSTEM' },
  { slot: 'E4', code: 'EE320', name: 'VLSI DESIGN' },
  { slot: 'E4', code: 'EE328', name: 'Deep Learning with Artifical Neural Network' },
  { slot: 'E4', code: 'EE424', name: 'FLEXIBLE AC TRANSMISSION SYSTEMS' },
  { slot: 'E4', code: 'EN316', name: 'ENVIRONMENTAL LAW AND POLICY' },
  { slot: 'E4', code: 'IT316', name: 'HIGH SPEED NETWORKS' },
  { slot: 'E4', code: 'IT420', name: 'COMPUTER VISION' },
  { slot: 'E4', code: 'IT428', name: 'Mobile and Digital Forensics' },
  { slot: 'E4', code: 'MBAMK220', name: 'INTERNATIONAL MARKETING' },
  { slot: 'E4', code: 'MBASC222', name: 'SUPPLY CHAIN STRATEGY AND INNOVATION' },
  { slot: 'E4', code: 'MC418', name: 'OPTIMIZATION TECHNIQUES' },
  { slot: 'E4', code: 'ME302', name: 'HEAT AND MASS TRANSFER' },
  { slot: 'E4', code: 'ME310', name: 'AUTOMATION IN MANUFACTURING' },
  { slot: 'E4', code: 'ME312', name: 'QUALITY MANAGEMENT &amp SIX SIGMA APPLICATIONS' },
  { slot: 'E4', code: 'ME406', name: 'ELASTIC &amp PLASTIC BEHAVIOUR OF MATERIALS' },
  { slot: 'E4', code: 'PE302', name: 'WELDING TECHNOLOGY' },
  { slot: 'E4', code: 'PE414', name: 'FLEXIBLE MANUFACTURING SYSTEM' },
  { slot: 'E4', code: 'SE316', name: 'NATURAL LANGUAGE PROCESSING' },

  { slot: 'E5', code: 'AE304', name: 'INTERNAL COMBUSTION ENGINES' },
  { slot: 'E5', code: 'BT328', name: 'BIOINFORMATICS APPROACH IN COMPLEX DISORDERS' },
  { slot: 'E5', code: 'CE312', name: 'WATER POWER SYSTEMS &amp DESIGN' },
  { slot: 'E5', code: 'CE320', name: 'COMPUTATIONAL HYDRAULICS' },
  { slot: 'E5', code: 'CE322', name: 'TRAFFIC AND TRANSPORTATION PLANNING' },
  { slot: 'E5', code: 'CE324', name: 'INFRASTRUCTURE RESILIENCE AND SOCIO-ECONOMIC DYNAMICS' },
  { slot: 'E5', code: 'CH304', name: 'Mass Transfer-II' },
  { slot: 'E5', code: 'CO304', name: 'ARTIFICIAL INTELLIGENCE' },
  { slot: 'E5', code: 'CO324', name: 'PATTERN RECOGNITION' },
  { slot: 'E5', code: 'CO326', name: 'OBJECT ORIENTED SOFTWARE ENGINEERING' },
  { slot: 'E5', code: 'EC342', name: 'Machine Learning' },
  { slot: 'E5', code: 'EE322', name: 'IC TECHNOLOGY' },
  { slot: 'E5', code: 'EE332', name: 'Wireless Sensor Network' },
  { slot: 'E5', code: 'EE426', name: 'SMART GRID' },
  { slot: 'E5', code: 'EE434', name: 'COMPUTER CONTROL OF PROCESSES' },
  { slot: 'E5', code: 'EE450', name: 'CLOUD COMPUTING FUNDAMENTALS' },
  { slot: 'E5', code: 'EN304', name: 'AIR POLLUTION &amp CONTROL' },
  { slot: 'E5', code: 'EN310', name: 'Surface and Ground water Pollution' },
  { slot: 'E5', code: 'IT304', name: 'SOFTWARE ENGINEERING' },
  { slot: 'E5', code: 'IT312', name: 'CYBER FORENSICS' },
  { slot: 'E5', code: 'IT324a', name: 'Deep Learning' },
  { slot: 'E5', code: 'IT404', name: 'BIG DATA ANALYTICS' },
  { slot: 'E5', code: 'MC310', name: 'SOFTWARE ENGINEERING' },
  { slot: 'E5', code: 'SE318', name: 'Advanced Database Management System' },

  { slot: 'E6', code: 'AE306', name: 'ALTERNATIVE FUELS &amp ENERGY SYSTEMS' },
  { slot: 'E6', code: 'AE430', name: 'Product Design and Development' },
  { slot: 'E6', code: 'CO208', name: 'ALGORITHM DESIGN AND ANALYSIS' },
  { slot: 'E6', code: 'IT208', name: 'ALGORITHM DESIGN AND ANALYSIS' },
  { slot: 'E6', code: 'IT306', name: 'ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEMS' },
  { slot: 'E6', code: 'ME208', name: 'MANUFACTURING TECHNOLOGY-I' },
  { slot: 'E6', code: 'ME404', name: 'INDUSTRIAL ENGINEERING' },
  { slot: 'E6', code: 'ME420', name: 'MATERIALS MANAGEMENT' },
  { slot: 'E6', code: 'PE208', name: 'METAL CUTTING &amp TOOL DESIGN' },
]

const subjectsBySlot = {
  E1: [...subjects.filter((s) => s.slot === 'E1')],
  E2: [...subjects.filter((s) => s.slot === 'E2')],
  E3: [...subjects.filter((s) => s.slot === 'E3')],
  E4: [...subjects.filter((s) => s.slot === 'E4')],
  E5: [...subjects.filter((s) => s.slot === 'E5')],
  E6: [...subjects.filter((s) => s.slot === 'E6')],
}

const subjectsByDept = {
  CO: [...subjects.filter((s) => s.code.startsWith('CO'))],
  IT: [...subjects.filter((s) => s.code.startsWith('IT'))],
  SE: [...subjects.filter((s) => s.code.startsWith('SE'))],
  EE: [...subjects.filter((s) => s.code.startsWith('EE'))],
  EC: [...subjects.filter((s) => s.code.startsWith('EC'))],
  AE: [...subjects.filter((s) => s.code.startsWith('AE'))],
  MC: [...subjects.filter((s) => s.code.startsWith('MC'))],
  ME: [...subjects.filter((s) => s.code.startsWith('ME'))],
  CH: [...subjects.filter((s) => s.code.startsWith('CH'))],
  CE: [...subjects.filter((s) => s.code.startsWith('CE'))],
  HU: [...subjects.filter((s) => s.code.startsWith('HU'))],
  PE: [...subjects.filter((s) => s.code.startsWith('PE'))],
  EN: [...subjects.filter((s) => s.code.startsWith('EN'))],
  EP: [...subjects.filter((s) => s.code.startsWith('EP'))],
  BT: [...subjects.filter((s) => s.code.startsWith('BT'))],
}

export { subjects, subjectsBySlot, subjectsByDept }
