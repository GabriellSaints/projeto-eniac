import { Product, User } from './types';

export const DEFAULT_USERS: User[] = [
  {
    id: 'admin-001',
    name: 'Administrador ENIAC',
    email: 'admin@eniac.edu.br',
    ra: '000001',
    password: 'admin',
    role: 'admin',
  },
  {
    id: 'comprador-001',
    name: 'João Silva Ferreira',
    email: 'joao.silva.ferreira@eniac.edu.br',
    ra: '320984',
    password: '123456',
    role: 'comprador',
  },
  {
    id: 'vendedor-001',
    name: 'Mariana Santos',
    email: 'mariana.santos@eniac.edu.br',
    ra: '109552',
    password: '123456',
    role: 'vendedor',
    storeName: 'TechMari Store',
    storeDescription: 'Loja especializada em componentes eletrônicos e kits educacionais para estudantes de engenharia.',
    storeImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBq5eyxaXScXZTlQDlA4dDHJO6wIXFxetJ9O8m2yNqIGN2aZ9LBVTe5Fxsrdp6__VM_Yt9WlfxQx3qceklgAIpC99yMozQfHVuRnCnR2r-vFA5v2vkVFmnSXWV1P3aPo1NklndZeAcaW5jKBFe95QM81pjVqVwiy7iTZloJ5F7AEShoLhIGWBhzkeN_NX7CIewpF7CdNokJio_yrHo_AcJRLPa93BhUKKHgO0MKb6JOVdsa7odYxNJguOVfeTB_ZV1V4Zlfmu12vxM',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'moletom-eniac-2024',
    title: 'Moletom ENIAC Official 2024',
    category: 'Vestuário',
    subCategory: 'Casacos',
    price: 189.00,
    originalPrice: 220.00,
    rating: 4.9,
    reviewsCount: 38,
    description: 'Material premium com interior flanelado e logo bordada em alta definição, perfeito para demonstrar o orgulho acadêmico em dias frios.',
    longDescription: 'O Moletom Oficial do Centro Universitário ENIAC combina conforto excepcional e estilo atemporal. Confeccionado em mescla premium de algodão flanelado ultra macio, possui costuras reforçadas, capuz ajustável com forro duplo e punhos elásticos duráveis. O grande destaque é o escudo institucional do ENIAC elegantemente bordado no peito em fio prata de alta definição.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKrhu8h-jj8LpYiJOP0Wvh27aDMQSiNalhqAvh6Bm0BcK_X8nJGXwF7pm1lrOCCRN6Xr6cWVhbRz8ao3eeyhHhqlOZukdaFqQZ15HN7pD-jGllPJ_TU73jQ1eze_SfB0fK1n2T1Hx6bpFcR0sEByG4ToQA2OSEwSaZjjl6vojr_MqzCtqjVbBKw-mrX7A-gm1yzxijEMTmQHaB2l21LFZK22ERYpaZWbOfL-xM50vGLdxhcZO6bjL0d4m_QY2meLowy7YnuA8rv6E',
    thumbnails: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDKrhu8h-jj8LpYiJOP0Wvh27aDMQSiNalhqAvh6Bm0BcK_X8nJGXwF7pm1lrOCCRN6Xr6cWVhbRz8ao3eeyhHhqlOZukdaFqQZ15HN7pD-jGllPJ_TU73jQ1eze_SfB0fK1n2T1Hx6bpFcR0sEByG4ToQA2OSEwSaZjjl6vojr_MqzCtqjVbBKw-mrX7A-gm1yzxijEMTmQHaB2l21LFZK22ERYpaZWbOfL-xM50vGLdxhcZO6bjL0d4m_QY2meLowy7YnuA8rv6E'
    ],
    badge: 'Destaque',
    stockStatus: 'EM ESTOQUE',
    stockDescription: 'Disponível na secretaria',
    sku: 'APP-HD24-OFF',
    brand: 'Official ENIAC',
    specifications: {
      'Material': '70% Algodão, 30% Poliéster',
      'Acabamento': 'Interior flanelado anti-pilling',
      'Bordado': 'Fio prata metalizado de alta densidade',
      'Modelagem': 'Unissex com bolso canguru'
    }
  },
  {
    id: 'kit-eletronica-academic-v2',
    title: 'Kit Eletrônica Acadêmico V2',
    category: 'Componentes',
    subCategory: 'Kits Acadêmicos',
    price: 245.50,
    rating: 4.7,
    reviewsCount: 29,
    description: 'Multímetro digital portátil, protoboard de 830 pontos e mais de 200 componentes eletrônicos básicos fundamentais para aulas de laboratório.',
    longDescription: 'Desenvolvido especialmente para os estudantes das engenharias e cursos de tecnologia do ENIAC, o Kit Acadêmico V2 é a ferramenta ideal para complementar as aulas práticas de circuitos elétricos, sistemas digitais e eletrônica analógica. Inclui um multímetro confiável de resposta rápida e uma variedade generosa de resistores, capacitores, diodos, transistores e LEDs.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNB1Q5az2x2eb9vSNCsGlBi2qHwfcNG0KU5cEA6wMXP1DTEeDBiS3DdWBzLSxXq5sizcO0qRMCo7nSFdYdaywTS4ywjCv7R4EPR1dIQM8u-l9ydhQZN0E-MWqZn9fp9NnDsUIorRZpCnlbj6NdMdOesU5IhftcM4nHgXEWRkl0zv9CUtHUyAvPSdu04cLrszatrOCTrcgjw2sIGFPc3evC1pxC7DlhLxJBt__YycCF3Zqe_LsMlTbv3CroyjHNUlP6kQp-PP-MRUQ',
    thumbnails: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDNB1Q5az2x2eb9vSNCsGlBi2qHwfcNG0KU5cEA6wMXP1DTEeDBiS3DdWBzLSxXq5sizcO0qRMCo7nSFdYdaywTS4ywjCv7R4EPR1dIQM8u-l9ydhQZN0E-MWqZn9fp9NnDsUIorRZpCnlbj6NdMdOesU5IhftcM4nHgXEWRkl0zv9CUtHUyAvPSdu04cLrszatrOCTrcgjw2sIGFPc3evC1pxC7DlhLxJBt__YycCF3Zqe_LsMlTbv3CroyjHNUlP6kQp-PP-MRUQ'
    ],
    stockStatus: 'DISPONÍVEL',
    stockDescription: 'Pronta entrega no Lab B',
    sku: 'SKU: ENI-9982',
    brand: 'Texas Instruments',
    specifications: {
      'Protoboard': '830 pontos com linhas de distribuição',
      'Multímetro': 'Digital com visor LCD e baterias inclusas',
      'Componentes': '200+ peças variadas contendo jumpers, resistores e diodos',
      'Estojo': 'Plástico transparente de alta resistência com travas'
    }
  },
  {
    id: 'robotica-aplicada-ia',
    title: 'Robótica Aplicada à IA',
    category: 'Livros',
    subCategory: 'Engenharia',
    price: 159.00,
    rating: 5.0,
    reviewsCount: 54,
    description: 'A bíblia da automação inteligente moderna, escrita e referenciada pelos professores pesquisadores titulares do Centro ENIAC.',
    longDescription: 'O livro de cabeceira de todo engenheiro moderno. Robótica Aplicada à IA introduz conceitos fundamentais desde cinemática direta e inversa de manipuladores robóticos até a integração de redes neurais profundas e visão computacional diretamente em hardware em tempo real. Uma obra acadêmica com farta aplicação prática em ROS (Robot Operating System).',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsyFvgHhCwUfYcaAa7ipjhC0h_LtB87v0DOE6huNVDwjyDyjcAKIum_N31kLuU9vX6tUbDwn8W4LSFCOkWAjM2Fvjy3sOWl__yNi7tHMuhpq_zTBtb5cHC4ID13zpMmAnKrlyslUwRAaNzw3xX2AHFI-w5zBCM1k6gGckw6F4Jk4ownK-mpSBiVaru47w30h2Vul8jh2x8bOcjh_GKQCEUmsMaJHT7Dx709tORL6Thgda9iYw8ZKDWv-0HTFeG1zOUAUo4sFn6A1A',
    thumbnails: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBsyFvgHhCwUfYcaAa7ipjhC0h_LtB87v0DOE6huNVDwjyDyjcAKIum_N31kLuU9vX6tUbDwn8W4LSFCOkWAjM2Fvjy3sOWl__yNi7tHMuhpq_zTBtb5cHC4ID13zpMmAnKrlyslUwRAaNzw3xX2AHFI-w5zBCM1k6gGckw6F4Jk4ownK-mpSBiVaru47w30h2Vul8jh2x8bOcjh_GKQCEUmsMaJHT7Dx709tORL6Thgda9iYw8ZKDWv-0HTFeG1zOUAUo4sFn6A1A'
    ],
    badge: 'Mais Vendido',
    stockStatus: 'DISPONÍVEL',
    stockDescription: 'Disponível na Biblioteca',
    sku: 'LIV-ROB-IA23',
    brand: 'Official ENIAC',
    specifications: {
      'Autores': 'Prof. Dr. Ricardo Silva & Equipe ENIAC',
      'Edição': '2ª Edição Revisada e Ampliada - 2024',
      'Formato': 'Capa Dura com 480 páginas de conteúdo técnico',
      'Idioma': 'Português BR'
    }
  },
  {
    id: 'camisa-polo-corporate',
    title: 'Camisa Polo Corporate',
    category: 'Vestuário',
    subCategory: 'Camisas',
    price: 115.00,
    rating: 4.6,
    reviewsCount: 17,
    description: 'Elegância, discrição e conforto para eventos institucionais, apresentações de TCC e representação estudantil oficial externa.',
    longDescription: 'Confeccionada em piquet de algodão ultra respirável, a Camisa Polo Corporate é o visual padrão para o estudante que deseja se destacar pelo profissionalismo. Apresenta botões personalizados de madrepérola natural, golas estruturadas que mantêm a forma mesmo após diversas lavagens e bordado minimalista do brasão ENIAC no bolso frontal.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOVkY58Etkagu3KGTfMXN5f5wrjCGAI9niWFIierdVfn0loQ433QeNxLEuaKq2nK8Ybo7f3XPOG7bpDlmgu2D6iV5VUF5MbTdEq-o6gvYaV1G7ZNmfMTsSQVCAxVei9aehVtQOSPEL6MaAjnXJheKCBJQumX_X1vz180dG9xU_qds_u36trG6Edupcg6l1EVpwOvG3QxdFjIfXjN7HRVe3MmsV8HGueClpJwSszTZz9dv6VcMrcCTpZfpOiSBCN-S5HFkonWMMqVg',
    thumbnails: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCOVkY58Etkagu3KGTfMXN5f5wrjCGAI9niWFIierdVfn0loQ433QeNxLEuaKq2nK8Ybo7f3XPOG7bpDlmgu2D6iV5VUF5MbTdEq-o6gvYaV1G7ZNmfMTsSQVCAxVei9aehVtQOSPEL6MaAjnXJheKCBJQumX_X1vz180dG9xU_qds_u36trG6Edupcg6l1EVpwOvG3QxdFjIfXjN7HRVe3MmsV8HGueClpJwSszTZz9dv6VcMrcCTpZfpOiSBCN-S5HFkonWMMqVg'
    ],
    stockStatus: 'POUCAS UNIDADES',
    stockDescription: 'Apenas 5 unidades restando',
    sku: 'APP-POL-CORP',
    brand: 'Official ENIAC',
    specifications: {
      'Tecido': 'Meia-malha Piquet Premium',
      'Composição': '100% Algodão Orgânico Certificado',
      'Modelagem': 'Veste ao corpo de forma equilibrada',
      'Cor': 'Azul Marinho Real Deep Blue'
    }
  },
  {
    id: 'arduino-uno-r3-academic',
    title: 'Arduino Uno R3 Original Edição Acadêmica',
    category: 'Eletrônicos',
    subCategory: 'Microcontroladores',
    price: 189.90,
    originalPrice: 215.00,
    rating: 4.8,
    reviewsCount: 142,
    description: 'Placa microcontroladora ATmega328P essencial para robótica, IoT, automação residencial e prototipagem ágil nos semestres de tecnologia desenvolvida com alta durabilidade.',
    longDescription: 'O Arduino Uno R3 é a placa padrão ouro para o aprendizado de eletrônica e programação embarcada. Esta versão oficial de fabricação premium conta com estabilizadores de tensão de alta precisão protegendo os pinos contra curtos acidentais no laboratório acadêmico, barramentos de pinos coloridos facilitando o mapeamento, e microcontrolador soquetado removível ATmega328P para garantir longevidade.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAudFw63zqg7WlTG-hHn-jScaZvV99vHPi5RlSj7OBp_WvKG_67tJpSWGNt-dtb8B-1EnvFFtJib6XbJna73MW0wUU2xvwrexRmlj1rYlCySyZ7pxbFol8ZqmpZOKCwoaQ02TuXx5LuN-XykrKA41b24bRCkY2dMpT6dhPB3ob-gxj-_vLCsCwfiY2-jttplUGrkLO0rfyJ3apz_rkaCxfTROBdatcwoRMICib1Md9U8nsfuZlHQmijSy5K6kw4CbJyJfPsARmRtKA',
    thumbnails: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAudFw63zqg7WlTG-hHn-jScaZvV99vHPi5RlSj7OBp_WvKG_67tJpSWGNt-dtb8B-1EnvFFtJib6XbJna73MW0wUU2xvwrexRmlj1rYlCySyZ7pxbFol8ZqmpZOKCwoaQ02TuXx5LuN-XykrKA41b24bRCkY2dMpT6dhPB3ob-gxj-_vLCsCwfiY2-jttplUGrkLO0rfyJ3apz_rkaCxfTROBdatcwoRMICib1Md9U8nsfuZlHQmijSy5K6kw4CbJyJfPsARmRtKA'
    ],
    badge: 'Novo',
    stockStatus: 'DISPONÍVEL',
    stockDescription: 'Disponível no Laboratório A',
    sku: 'SKU: ENI-ARD-001 | 5V / 16MHz',
    brand: 'Arduino',
    specifications: {
      'Microcontrolador': 'ATmega328P de 8 bits soquetado',
      'Tensão de Operação': '5V DC com entrada sugerida de 7V-12V',
      'Pinos Digitais I/O': '14 pinos (dos quais 6 fornecem saída PWM)',
      'Interface Física': 'Conexão USB Type-B padrão robusto industrial'
    }
  },
  {
    id: 'multimetro-digital-true-rms',
    title: 'Multímetro Digital Profissional True RMS',
    category: 'Eletrônicos',
    subCategory: 'Instrumentação',
    price: 450.00,
    rating: 4.8,
    reviewsCount: 33,
    description: 'Multímetro profissional e preciso de última geração com detecção inteligente de ondas senoidais, perfeito para medições limpas de tensão, corrente e resistência.',
    longDescription: 'O Multímetro Digital Profissional de nível profissional com calibração True RMS garante exatidão de leitura em qualquer senoidal distorcida de instalações industriais ou circuitos de comutação rápidos. Equipado com proteção contra transientes CAT III 600V, fusíveis duplos internos cerâmicos contra queimas por sobrecarga e display retroiluminado expandido de alta visualização.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqK47OB9JOll0caK-3HmHhUpMWfNm1ftrHL9iNZnWrZmauk3BHA93Obc-d_7KKOWepwuwYqL3f6L7N6Ukdcyv1VkXMxPE82_r2VX8yEUxojvTR_EIt-D4s3eBZcS_lYF0JIdY3QxuGxbQCc1gez1jiTs3qm1YgU88JZ05oMNnPc31ZQ_ROH7-CasaSxslr-uRrs8Mp-PgBQ-rshc6xuuOfIaqKXbJCYYpHqtE7q1DbfIEcDx3lP3zPLnqaaLVbBAmM2ACMlQeVMHg',
    thumbnails: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAqK47OB9JOll0caK-3HmHhUpMWfNm1ftrHL9iNZnWrZmauk3BHA93Obc-d_7KKOWepwuwYqL3f6L7N6Ukdcyv1VkXMxPE82_r2VX8yEUxojvTR_EIt-D4s3eBZcS_lYF0JIdY3QxuGxbQCc1gez1jiTs3qm1YgU88JZ05oMNnPc31ZQ_ROH7-CasaSxslr-uRrs8Mp-PgBQ-rshc6xuuOfIaqKXbJCYYpHqtE7q1DbfIEcDx3lP3zPLnqaaLVbBAmM2ACMlQeVMHg'
    ],
    badge: 'Mais Vendido',
    stockStatus: 'POUCAS UNIDADES',
    stockDescription: 'Últimas 3 unidades',
    sku: 'SKU: ENI-INS-042 | 600V CAT III',
    brand: 'Texas Instruments',
    specifications: {
      'Segurança': 'Certificação CAT III 600V e dupla fusão protetora',
      'Funções': 'Tensão AC/DC, Corrente AC/DC, Resistência, Capacitância e Frequência',
      'Destaques': 'Retenção de dados Data Hold, Iluminação traseira de display, Detecção NCV',
      'Precisão DC': '±(0.5% + 3) em leituras fundamentais'
    }
  },
  {
    id: 'intel-core-i7-processor',
    title: 'Processador Intel Core i7 12ª Geração',
    category: 'Eletrônicos',
    subCategory: 'Processadores',
    price: 1299.00,
    originalPrice: 1590.00,
    rating: 4.9,
    reviewsCount: 66,
    description: 'Processador de altíssimo desempenho para estações de computação científica e máquinas de desenvolvimento industrial do campus.',
    longDescription: 'O Processador Intel Core i7 de arquitetura híbrida inteligente traz excelente desempenho térmico e computacional. Seus núcleos de alta performance somados aos núcleos econômicos gerenciam cargas de inteligência artificial pesada, processos paralelos em multithreading e compilação de código complexo sem hesitar com baixo consumo energético em plena carga de laboratório.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5JcwnJ7IUPgMt_T3wSEip0oXzbWaQm79xCEe4wnljOHTIgxAcRcXh1raQE-dsSwHjsbyUTA-VIwJnXtvdvwdWnOBJNXseFd2evjdbVPNDa9WBpALyunKjC8tRT5d5U2sZxp1IYCPTQT5FztfxgdjI47bsbz9TrpaLyZQL3i_FnDjNcEG94Y9tABEl5pxRWrsp1ZmjjY7VBKvdNLr3SZmJVf_2RZP0PixiXd7kPfamCaSU-sP8BEsZNTBuD9sEeT7qh6UfmxTYFa0',
    thumbnails: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC5JcwnJ7IUPgMt_T3wSEip0oXzbWaQm79xCEe4wnljOHTIgxAcRcXh1raQE-dsSwHjsbyUTA-VIwJnXtvdvwdWnOBJNXseFd2evjdbVPNDa9WBpALyunKjC8tRT5d5U2sZxp1IYCPTQT5FztfxgdjI47bsbz9TrpaLyZQL3i_FnDjNcEG94Y9tABEl5pxRWrsp1ZmjjY7VBKvdNLr3SZmJVf_2RZP0PixiXd7kPfamCaSU-sP8BEsZNTBuD9sEeT7qh6UfmxTYFa0'
    ],
    badge: 'Oferta',
    stockStatus: 'EM ESTOQUE',
    stockDescription: 'Disponível Imediato',
    sku: 'SKU: ENI-CPU-099 | LGA 1700',
    brand: 'Intel',
    specifications: {
      'Soquete': 'LGA 1700 padrão placas-mãe modernas',
      'Frequência': 'Até 4.90 GHz com Turbo Boost Max Technology',
      'Memória': 'Suporte nativo a memórias DDR4 e DDR5 robustas',
      'Gráficos': 'Intel UHD Graphics 770 integrados de alta eficiência'
    }
  },
  {
    id: 'osciloscopio-digital-2-canais',
    title: 'Osciloscópio Digital 100MHz 2 Canais',
    category: 'Eletrônicos',
    subCategory: 'Instrumentação',
    price: 2450.00,
    rating: 4.9,
    reviewsCount: 12,
    description: 'Ferramenta laboratorial premium indispensável de medição de ondas e sinais eletrônicos rápidos de até 100MHz para engenharia mecatrônica.',
    longDescription: 'O Osciloscópio de bancada digital possui 2 canais isolados com taxa de amostragem de tempo real de 1GSa/s. Permite que estudantes analisem ruidos elétricos, tempos de disparo em sinais digitais de barramentos SPI/I2C e façam capturas precisas de sinais transitórios indutivos em placas embarcadas em tempo real.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEYj9LSqtgbwWkU-bWSy5h7jDPyJ40Au1MnMl8wdBoVS0PhsLcQVN7VqyqXX1ivjtuIhvDK2pCLC0vAIWqkNKwxSrbkLeleabr8FnNBktRTGtaXdGt5nbKaj1ZsVzjwqw5gPMWDtVCucR-wPN2v1W-POcYPGDXrD4owRQzYBoLkbNMrOGlsH8Yy8GRIFs8UloNMcs-Lt_ZcGMo9xZ37yeNhgtIYz8GSixdXwCTea1NEcbP6bxjYDWnbmWR5rilS33A6qt6444V6Ps',
    thumbnails: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBEYj9LSqtgbwWkU-bWSy5h7jDPyJ40Au1MnMl8wdBoVS0PhsLcQVN7VqyqXX1ivjtuIhvDK2pCLC0vAIWqkNKwxSrbkLeleabr8FnNBktRTGtaXdGt5nbKaj1ZsVzjwqw5gPMWDtVCucR-wPN2v1W-POcYPGDXrD4owRQzYBoLkbNMrOGlsH8Yy8GRIFs8UloNMcs-Lt_ZcGMo9xZ37yeNhgtIYz8GSixdXwCTea1NEcbP6bxjYDWnbmWR5rilS33A6qt6444V6Ps'
    ],
    stockStatus: 'DISPONÍVEL',
    stockDescription: 'Disponível no Laboratório C',
    sku: 'SKU: ENI-OSC-201 | 1GSa/s',
    brand: 'Texas Instruments',
    specifications: {
      'Largura de Banda': '100 MHz de alta fidelidade analógica',
      'Canais': '2 canais totalmente independentes estruturados',
      'Amostragem': 'Taxa máxima em tempo real de 1 GSa/s',
      'Interface': 'Display TFT LCD de 7 polegadas colorido de alta resolução'
    }
  },
  {
    id: 'kit-microcontrolador-eniac-v1',
    title: 'Kit Microcontrolador ENIAC-V1',
    category: 'Componentes',
    subCategory: 'Microcontroladores',
    price: 189.00,
    originalPrice: 259.90,
    rating: 4.8,
    reviewsCount: 42,
    description: 'Placa de desenvolvimento acadêmica embarcada especial ENIAC equipada com conectividade sem fio integrada Wi-Fi & Bluetooth, perfeita para Internet das Coisas (IoT).',
    longDescription: 'O Kit Microcontrolador ENIAC-V1 representa o auge da inovação em design de placas proprietárias para o aprendizado de sistemas embarcados no ENIAC. Projetado especificamente para as disciplinas de Engenharia, Automação e Redes, conta com o robusto chip ENIAC-Core alimentado a 160MHz de velocidade, suporte nativo a redes IoT, pinos robustos de fácil inserção e circuito integrado de carregamento inteligente.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDE5e7P0mCVzhmKU6k4AUXeUNyzBuudsyrqiqjJGTPT6Nnxwkc3hGp166RyBTk8hGncyU2wkmgbn0DuGX_gtRVZWvVF9llfW0u9Se7G-ZS8Dnj1_-d163eExlJWNbdlLGH2BIeULQNUboRRTdX6mRgKZUev_acmwM-5icIXw7_UAuoFTaAF3Od4KNx5B8afNUqpMXSM2tkYc23JYXf_YW16ri28byrFTbqMslAdlcFw7KUj4NTtHvoxNSj2egCQf6p1-mNVbw264LU',
    thumbnails: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDE5e7P0mCVzhmKU6k4AUXeUNyzBuudsyrqiqjJGTPT6Nnxwkc3hGp166RyBTk8hGncyU2wkmgbn0DuGX_gtRVZWvVF9llfW0u9Se7G-ZS8Dnj1_-d163eExlJWNbdlLGH2BIeULQNUboRRTdX6mRgKZUev_acmwM-5icIXw7_UAuoFTaAF3Od4KNx5B8afNUqpMXSM2tkYc23JYXf_YW16ri28byrFTbqMslAdlcFw7KUj4NTtHvoxNSj2egCQf6p1-mNVbw264LU',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAT3s8zGmbW4yj4_R0raD6d1BpE9AVvqxFJ2jGCHlEfjxBxcVWUHq-0gsv1IvpeHvArWRjvmlpgIyl63kO2npznYqTJSA9YMB1pGY0sNqk7t9OpgHmlSYQKxxagzmH2VRWYWGXES4vgEsgclinLID0KK3_CZVRLt-BZEqtvwfQBXLEJAN8imy6w2TlGg6FtGn4csUtm5Dbz5F_avKno9DPNkY2f53Qv0ga5Za96qefdXX5qgjBHk0eSq64cupy8wa4C8Pe0EfljISU',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBU4mEoMLssj-pX0DzAym0HONqYvJiAZEdllQGprUD1v5j-Jxab3ryjlJeN9T2JSfIbdVMG4qeSXcj7bykwguBYBH1h9fQkiw9IpnkPAJFFfypl22RsZzR9AvXqK6_5GaD1wyPeBQZYLnuHdNUhYKOc38FxAaR9WveN1JmooLym7vpScoSvUTW1JuryudcCpwwo9d1-s4WKAC3qYuvp0C-JF7lTiPHiP9FI1Tr6jjx0m3orJxTUOSnHFQ28m6GSnlS9SJk3CCPYjeI',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBrdfyv1_defbIj9x9RaG7RBsDjpN8kNFiYUdI-Xdy3Q9bQx5xB8IiQL6H3y5pSZiulQWOs0bKJgNIgl0JkTBKjujK-INk0s5i0cpUUeloVmh5icT0ahV74FWubnI2iEy_vn78tTOJodv9ybuGg1mEXRYzovg-wqpXhGP3tbocgA8K_68O10ai0TRP2mQOBsgRHwVXZP316hAlp0WtokeIG6GTYWNx0K4QH7_BrQsKdgxZG9b5kQVKESgTr-RVINs7-wOOhf4aGlwU'
    ],
    stockStatus: 'EM ESTOQUE',
    stockDescription: 'EM ESTOQUE - CAMPUS CENTRO',
    sku: 'SKU: SLD-PRO-V1',
    brand: 'Official ENIAC',
    specifications: {
      'Microprocessador': 'ENIAC-Core 32-bit v.4',
      'Clock Speed': '160 MHz',
      'Conectividade': 'Wi-Fi & Bluetooth LE',
      'Tensão de Operação': '3.3V - 5V DC',
      'Memória RAM': '520 KB Internal SRAM'
    }
  },
  {
    id: 'cabo-conexao-high-speed',
    title: 'Cabo de Conexão High-Speed (1m)',
    category: 'Componentes',
    subCategory: 'Cabos',
    price: 29.90,
    rating: 4.7,
    reviewsCount: 22,
    description: 'Cabo especial de rede com blindagem tripla CAT6 projetado para tráfego gigabit sem interferência externa em racks de servidores e redes acadêmicas.',
    longDescription: 'Cabo de alta integridade estrutural e conectores banhados a ouro para assegurar a menor taxa de reflexão ou perda de pacotes em uploads pesados. Possui proteção externa termoplástica maleável que evita dobras ou rompimento de fios em calhas congestionadas de laboratórios universitários.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7D9J1yFi2EsoLehwsVvhKkirwd9W8pQtOJnTulDGozoOI5aWGW5pvF4ij0TBtavbf5gYjlLsacXUfzopDQWur044CAc-2xSxdQRM6Y7O9MC6gFgdEHwAEgYwBl3-JwtDMGKybPKr0fnvm4QI31EpEpUa3e2egsepQ8Qd06CdjQ03YPGCGPMGhgDIGIxdfALfX9qNW00BurJiPUhjHnmI1fsgluKnL2-PtbD730bu7EloqpCYwjnAe08dbfNwd-4ZSqMVfboL8AZ8',
    thumbnails: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA7D9J1yFi2EsoLehwsVvhKkirwd9W8pQtOJnTulDGozoOI5aWGW5pvF4ij0TBtavbf5gYjlLsacXUfzopDQWur044CAc-2xSxdQRM6Y7O9MC6gFgdEHwAEgYwBl3-JwtDMGKybPKr0fnvm4QI31EpEpUa3e2egsepQ8Qd06CdjQ03YPGCGPMGhgDIGIxdfALfX9qNW00BurJiPUhjHnmI1fsgluKnL2-PtbD730bu7EloqpCYwjnAe08dbfNwd-4ZSqMVfboL8AZ8'
    ],
    stockStatus: 'EM ESTOQUE',
    stockDescription: 'Disponível no bloco de redes',
    sku: 'SKU: CB-HS10',
    brand: 'Texas Instruments',
    specifications: {
      'Categoria': 'CAT6 RJ45 Blindado',
      'Velocidade Máxima': '10 Gbps operando a 250MHz de frequência',
      'Extensão': '1.0 Metro com conectores estruturados',
      'Blindagem': 'STP (Shielded Twisted Pair) dupla folha'
    }
  },
  {
    id: 'estacao-solda-pro-grade',
    title: 'Estação de Solda ENIAC Pro-Grade',
    category: 'Componentes',
    subCategory: 'Ferramental',
    price: 489.00,
    rating: 4.8,
    reviewsCount: 19,
    description: 'Estação profissional de solda de alta exatidão com ajuste digital microcontrolado de aquecimento térmico ultra-veloz, excelente para montagens SMD complexas.',
    longDescription: 'Bancada inteligente de aquecimento para soldagem de pequenos componentes SMD em placas de laboratório. Conta com transformador interno isolado evitando danos eletrostáticos (ESD) em semicondutores, display LED para visualização de parâmetros exatos de temperatura e ponteira leve de aquecimento rápido e reposição facilitada.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnlbfRc8z7P0weorpTpywHhdM2ArKsWOa6FNeE_QTER1PCxREigliQ-eXFn9x60VyHxdOWf9WQ1HmlSLe2ICXaSfm_ilEo-k54rf9q2WGNUwfvm34_QnMjF1k-6CHDrVhchg-n2f2A3XOjy6Y99wda2ZfsA82BYibQQMGYu98PPNR_l-A61PmPjbR4ILq5bQRPH3-dWJKXFB1Sm1uoAp8tuy5OADh0X55NVEOLY6ftKywBfeIv3wPjyQMFOsxxgEuuzp0ltUPs0CQ',
    thumbnails: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDnlbfRc8z7P0weorpTpywHhdM2ArKsWOa6FNeE_QTER1PCxREigliQ-eXFn9x60VyHxdOWf9WQ1HmlSLe2ICXaSfm_ilEo-k54rf9q2WGNUwfvm34_QnMjF1k-6CHDrVhchg-n2f2A3XOjy6Y99wda2ZfsA82BYibQQMGYu98PPNR_l-A61PmPjbR4ILq5bQRPH3-dWJKXFB1Sm1uoAp8tuy5OADh0X55NVEOLY6ftKywBfeIv3wPjyQMFOsxxgEuuzp0ltUPs0CQ'
    ],
    stockStatus: 'POUCAS UNIDADES',
    stockDescription: 'Últimas unidades',
    sku: 'SKU: SLD-PRO',
    brand: 'Official ENIAC',
    specifications: {
      'Tensão': '110V/220V com seletor traseiro manual',
      'Eletricidade': 'Potência nominal de 65W saída rápida',
      'Faixa Térmica': '150°C a 480°C microajustada digitalmente',
      'Segurança': 'Certificação anti-estática ESD safe integrada'
    }
  },
  {
    id: 'moletom-canguru-eniac-2024',
    title: 'Moletom Canguru ENIAC - Edição 2024',
    category: 'Vestuário',
    subCategory: 'Casacos',
    price: 129.90,
    rating: 4.9,
    reviewsCount: 31,
    description: 'Moletom com capuz e bolso frontal estilo canguru oficial ENIAC, unindo conforto supremo, alta costura e as cores tradicionais acadêmicas.',
    longDescription: 'Perfeito para uso rotineiro nas dependências da universidade, o Moletom Canguru Edição 2024 destaca-se pela confecção em moletom encorpado com alta porcentagem de algodão, corte moderno oversized que confere excelente vestibilidade e estampado durável do Brasão do Centro Universitário ENIAC.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlUzzLNG7e8r_FyQzqGLbC0RYUxXaes4wb58XGvtvMdFC6YJCd3kMR77hFwzfLDNhQQowa6DFKgCr3ocZEP3FAtiduWRVX6bJBNdAU8iM9X6pb15Ay5f1eKAs0N2Yan7w8nnq4mbiGpmCqATO2T4400X0FwOjYKJV0XJon_ZUmmX6Qm6ByHBVOXohk3BdnTX7zNRpSzorzsbxTIgHttQPb5RjQZHfMU_e8s5apXDPcYj3w_9NtmXMyhelltukAHQ-lnYpsKClsn18',
    thumbnails: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDlUzzLNG7e8r_FyQzqGLbC0RYUxXaes4wb58XGvtvMdFC6YJCd3kMR77hFwzfLDNhQQowa6DFKgCr3ocZEP3FAtiduWRVX6bJBNdAU8iM9X6pb15Ay5f1eKAs0N2Yan7w8nnq4mbiGpmCqATO2T4400X0FwOjYKJV0XJon_ZUmmX6Qm6ByHBVOXohk3BdnTX7zNRpSzorzsbxTIgHttQPb5RjQZHfMU_e8s5apXDPcYj3w_9NtmXMyhelltukAHQ-lnYpsKClsn18'
    ],
    stockStatus: 'EM ESTOQUE',
    stockDescription: 'Disponível na secretaria do campus',
    sku: 'SKU: APP-HD24',
    brand: 'Official ENIAC',
    specifications: {
      'Trama': 'Moletom 3 cabos de altíssima gramatura',
      'Adicionais': 'Ribanas nas mangas e cós, cordão reforçado de ajuste',
      'Cor': 'Marinho Dark Collegiate',
      'Estamparia': 'Serigrafia em plastisol Premium de toque macio'
    }
  },
  {
    id: 'kit-automacao-iot-pro',
    title: 'Kit de Automação IoT Pro',
    category: 'Eletrônicos',
    subCategory: 'Kits Acadêmicos',
    price: 459.90,
    rating: 4.9,
    reviewsCount: 23,
    description: 'O kit completo definitivo para desenvolvedores e IoT engenheiros avançados com placa Raspberry Pi 4 de alta densidade e diversos sensores industriais modernos.',
    longDescription: 'Desenvolvido especificamente para os semestres de conectividade avançada e Internet das Coisas do ENIAC, o Kit de Automação IoT Pro reúne tudo o que há de mais moderno para a prototipagem de produtos smart conectados. Do microcontrolador Raspberry aos sensores analógicos de gases, relés optoacoplados e atuadores robustos de nível profissional.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBq5eyxaXScXZTlQDlA4dDHJO6wIXFxetJ9O8m2yNqIGN2aZ9LBVTe5Fxsrdp6__VM_Yt9WlfxQx3qceklgAIpC99yMozQfHVuRnCnR2r-vFA5v2vkVFmnSXWV1P3aPo1NklndZeAcaW5jKBFe95QM81pjVqVwiy7iTZloJ5F7AEShoLhIGWBhzkeN_NX7CIewpF7CdNokJio_yrHo_AcJRLPa93BhUKKHgO0MKb6JOVdsa7odYxNJguOVfeTB_ZV1V4Zlfmu12vxM',
    thumbnails: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBq5eyxaXScXZTlQDlA4dDHJO6wIXFxetJ9O8m2yNqIGN2aZ9LBVTe5Fxsrdp6__VM_Yt9WlfxQx3qceklgAIpC99yMozQfHVuRnCnR2r-vFA5v2vkVFmnSXWV1P3aPo1NklndZeAcaW5jKBFe95QM81pjVqVwiy7iTZloJ5F7AEShoLhIGWBhzkeN_NX7CIewpF7CdNokJio_yrHo_AcJRLPa93BhUKKHgO0MKb6JOVdsa7odYxNJguOVfeTB_ZV1V4Zlfmu12vxM'
    ],
    badge: 'Destaque',
    stockStatus: 'DISPONÍVEL',
    stockDescription: 'Disponível sob demanda',
    sku: 'SKU: ENI-IOT-PRO',
    brand: 'Arduino',
    specifications: {
      'Controlador': 'Módulo Raspberry Pi 4 Integrado de alto desempenho',
      'Conectividade': 'Wi-Fi Dual Band, Bluetooth 5.0 e Ethernet Gigabit integrados',
      'Sensores': 'Sensor de gases MQ-2, sensor ultrasônico HC-SR04, relé mecânico e DHT11',
      'Embalagem': 'Caixa organizadora modular com divisórias ajustáveis'
    }
  },
  {
    id: 'polo-universitaria-eniac',
    title: 'Polo Universitária ENIAC',
    category: 'Vestuário',
    subCategory: 'Camisas',
    price: 119.80,
    rating: 4.7,
    reviewsCount: 12,
    description: 'Camisa polo universitária clássica oficial de pique suave com o icônico brasão ENIAC elegantemente bordado no bolso lateral superior do peito.',
    longDescription: 'Ideal para o dia a dia de aulas ou reuniões acadêmicas formais. Seu piquet premium de fio 30 penteado possui estrutura que favorece a ventilação do calor, mantendo a sensação fresca mesmo em climas quentes. O brasão do tradicional e renomado Centro Universitário ENIAC traz distinção acadêmica ao vestuário de forma discreta.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMF_2X2cszP2-NXB6nM1euzgWhNNSVNxmfG67tPBLqzz3h5SoUtwIXglUYMqz0QAzEdvS6Sdbwlb_xGRMV0sVim8BKliT9_IWnrMDcO2Gl4Go01TUyOc66KjYtBBMUKlaZ-ReA0WPx4PUZyRBXpmgOowUducKhvSn6iPfMC_ivM6mf5ReeZksoRTayWqgEJWED2AKVfEQuDJ4qWz51W3s3kdP5LQ1DPcGWyYBgnypx8nhsTrt56vrVMfobKaE6_TX4RR2k5GAD1Ts',
    thumbnails: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCMF_2X2cszP2-NXB6nM1euzgWhNNSVNxmfG67tPBLqzz3h5SoUtwIXglUYMqz0QAzEdvS6Sdbwlb_xGRMV0sVim8BKliT9_IWnrMDcO2Gl4Go01TUyOc66KjYtBBMUKlaZ-ReA0WPx4PUZyRBXpmgOowUducKhvSn6iPfMC_ivM6mf5ReeZksoRTayWqgEJWED2AKVfEQuDJ4qWz51W3s3kdP5LQ1DPcGWyYBgnypx8nhsTrt56vrVMfobKaE6_TX4RR2k5GAD1Ts'
    ],
    stockStatus: 'DISPONÍVEL',
    stockDescription: 'Disponível na secretaria do ENIAC',
    sku: 'SKU: APP-POL-OFF',
    brand: 'Official ENIAC',
    specifications: {
      'Composição': '50% Algodão, 50% Poliéster de alta elasticidade',
      'Gola': 'Acabamento em retilínea reforçada dupla calibração',
      'Cor': 'Deep Charcoal Dark Blue',
      'Abertura': 'Carcela clássica com duplo abotoamento'
    }
  }
];

export const CATEGORIES = ['Todos', 'Eletrônicos', 'Vestuário', 'Livros', 'Componentes', 'Ofertas'];

export const BRANDS = ['Intel', 'Arduino', 'Texas Instruments', 'Official ENIAC'];
