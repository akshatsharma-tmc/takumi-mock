import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      platform: 'Platform',
      ecosystem: 'Ecosystem',
      products: 'Products',
      partnerships: 'Partnerships',
      team: 'Team',
      facilities: 'Facilities',
      contact: 'Contact'
    },
    // Hero Section
    hero: {
      tagline: 'Japanese Innovation with Japanese Technology',
      taglineJp: '日本の技術でインドの革新',
      subtitle: 'Powering the future of motion control',
      cta: 'Discover Our Vision',
      scrollHint: 'Scroll to explore'
    },
    // Introduction
    intro: {
      title: 'Introduction',
      heading: 'The Art of Motion',
      description: 'Takumi is a next-gen motion products company, powered by Indian innovation and Japanese technology, seamlessly blending Art & Engineering.',
      mission: 'To create a robust ecosystem for Mass Custom Engineering of Intelligent Motion Products at Speed and Scale for societal technology adoption.',
      caseTitle: 'Democratizing CASE Mobility',
      caseDescription: 'Connected – Autonomous – Shared/Smart – Electric',
      ecosystemTitle: 'Our Ecosystem',
      coCreation: 'Co-Creation Ecosystem',
      magicPlatform: 'Magic Platform',
      cloud: 'Takumi Cloud'
    },
    // Platform
    platform: {
      title: 'Platform',
      heading: 'Motion Magic',
      subtitle: 'Application Specific – Software Defined – Platform Engineered',
      features: {
        intelligentMotion: {
          title: 'Intelligent Motion',
          description: 'Application Specific – Software Defined – Platform Engineered'
        },
        innovativeIPs: {
          title: 'Innovative IPs',
          description: 'Motor Control Algorithms & Software, Digital Power, Sensor Fusion, Autonomous Motion Stack'
        },
        mbse: {
          title: 'Model Based System Engineering',
          description: 'Simulate – Verify cycle and Build – Validate cycle'
        },
        catalog: {
          title: 'Catalog & Marketplace',
          description: 'Core Products and Marketplace Ecosystem'
        },
        plugNPlay: {
          title: 'Plug-N-Play Models',
          description: 'Motion Products, Users, Application and Environment'
        },
        digitalTwin: {
          title: 'Digital Twin',
          description: 'Remote Monitoring & Updates through Connected Edge and IoT Cloud Infrastructure'
        }
      }
    },
    // Ecosystem
    ecosystem: {
      title: 'Takumi Ecosystem',
      items: [
        'Takumi Motion Magic Platform & Core Products',
        'Partner Ecosystem',
        'PoC & Proto Build',
        'Tear-down, Benchmarking and Should-Costing',
        'Value Analysis & Value Engineering',
        'Motor – Controller Calibration',
        'Product Qualification, Compliance Certifications and Homologation'
      ]
    },
    // Products
    products: {
      title: 'Products',
      domains: {
        title: 'Domains - Applications',
        transportation: 'Transportation',
        industrial: 'Industrial'
      },
      core: {
        title: 'Core Products',
        motors: {
          title: 'Motors + Motor Controllers',
          items: [
            'Brushed DC, Brushless DC, PMSM Motors and Servo Motors',
            'Motor Controllers based on Infineon, TI, Renesas, Microchip',
            'Ready: 12V – 96V / 100W – 33KW',
            'Upcoming: 240V – 1200V / 33KW – 1200KW'
          ]
        },
        controllers: {
          title: 'Intelligent Application Controllers',
          items: [
            'Based on Renesas, NXP and Microchip controllers',
            'Smart Control for specific application, environment and users',
            'Optional Telematics Unit integration for Remote Connectivity'
          ]
        },
        telematics: {
          title: 'Telematics Unit',
          items: ['GPS + IMU (Accelerometer + Compass)', '4G/5G', 'WiFi + BT/BLE']
        }
      },
      partner: {
        title: 'Partner Products',
        sensors: 'Sensors',
        hmi: 'HMI',
        battery: 'Battery + BMS',
        accessories: 'Accessories'
      },
      evMatrix: {
        title: 'EV Power Train Products'
      },
      intelligentMatrix: {
        title: 'Intelligent Motion Applications'
      }
    },
    // Partnerships
    partnerships: {
      title: 'Engineering Partnerships & Alliances',
      subtitle: 'Collaborating with global technology leaders'
    },
    // Team
    team: {
      title: 'Our Team',
      subtitle: 'Integrated System/Product Engineering teams with specialization in Model Based System Engineering, Hardware Engineering, Software Engineering, PoC/Prototype Manufacturing, System Integration – Calibration – Validation.',
      members: {
        britto: {
          name: 'Britto EV',
          role: 'Founder & MD',
          bio: 'Electrical Engineer 20+ years with Japanese companies. Well connected with the Japanese motor ecosystem. Believes in Indian innovation.'
        },
        aravind: {
          name: 'Aravind Prasath',
          role: 'Founder',
          bio: '20+ years in power electronics and motor controls. An innovator, he created the BLDC ceiling fan solution which has more than 50% share in India.'
        },
        prasanth: {
          name: 'Prasanth B',
          role: 'Founder',
          bio: 'Vehicle engineer for 12 years, who professes model based design. He has worked on the models for many electric vehicle transmission systems.'
        },
        mohara: {
          name: 'Mohara Toshinari',
          role: 'Director',
          bio: 'Seasoned powertrain engineer, who joined the FCC board from Honda R&D. A visionary leader, currently he heads the CASE initiative.'
        },
        shimogaki: {
          name: 'Shimogaki Y',
          role: 'Advisor',
          bio: 'Seasoned powertrain engineer, who joined the FCC board from Honda R&D. A visionary leader, currently he heads the CASE initiative.'
        }
      }
    },
    // Facilities
    facilities: {
      title: 'Facilities & Certifications',
      locations: {
        kyoto: {
          name: 'Takumi – Kyoto',
          description: 'Technology Partnerships – Market Research'
        },
        bangalore: {
          name: 'Takumi – Bangalore',
          description: 'Engineering and PoC & Proto Production'
        },
        tenkasi: {
          name: 'Takumi – Tenkasi',
          description: 'Engineering, Production & Test Lab'
        }
      },
      certifications: ['ISO 9001:2015', 'ISO 14001:2015', 'ISO 27001:2013', 'ESD Association']
    },
    // Contact
    contact: {
      title: 'Get In Touch',
      subtitle: 'Let\'s discuss how we can power your vision',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        company: 'Company',
        subject: 'Subject',
        message: 'Your Message',
        submit: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Failed to send message. Please try again.'
      }
    },
    // Footer
    footer: {
      newsletter: {
        title: 'Subscribe to Our Newsletter',
        placeholder: 'Enter your email',
        submit: 'Subscribe',
        success: 'Subscribed successfully!',
        error: 'Subscription failed. Please try again.'
      },
      links: {
        about: 'About',
        products: 'Products',
        careers: 'Careers',
        contact: 'Contact Us'
      },
      social: 'Follow Us',
      copyright: '© 2026 Takumi Motion Controls Pvt. Ltd. All Rights Reserved.',
      terms: 'Terms of Use',
      privacy: 'Privacy Policy'
    }
  },
  jp: {
    // Navigation
    nav: {
      home: 'ホーム',
      about: '会社概要',
      platform: 'プラットフォーム',
      ecosystem: 'エコシステム',
      products: '製品',
      partnerships: 'パートナーシップ',
      team: 'チーム',
      facilities: '施設',
      contact: 'お問い合わせ'
    },
    // Hero Section
    hero: {
      tagline: '日本の技術とインドのイノベーション',
      taglineJp: 'Indian Innovation with Japanese Technology',
      subtitle: 'モーションコントロールの未来を動かす',
      cta: 'ビジョンを発見',
      scrollHint: 'スクロールして探索'
    },
    // Introduction
    intro: {
      title: '紹介',
      heading: 'モーションの芸術',
      description: 'タクミは、インドのイノベーションと日本の技術を融合し、アートとエンジニアリングをシームレスに融合させた次世代モーション製品会社です。',
      mission: '社会的な技術採用のためのインテリジェントモーション製品のマスカスタムエンジニアリングのための強力なエコシステムを構築すること。',
      caseTitle: 'CASEモビリティの民主化',
      caseDescription: 'コネクテッド – 自律 – シェアード/スマート – 電気',
      ecosystemTitle: 'エコシステム',
      coCreation: '共創エコシステム',
      magicPlatform: 'マジックプラットフォーム',
      cloud: 'タクミクラウド'
    },
    // Platform
    platform: {
      title: 'プラットフォーム',
      heading: 'モーションマジック',
      subtitle: 'アプリケーション固有 – ソフトウェア定義 – プラットフォームエンジニアリング',
      features: {
        intelligentMotion: {
          title: 'インテリジェントモーション',
          description: 'アプリケーション固有 – ソフトウェア定義 – プラットフォームエンジニアリング'
        },
        innovativeIPs: {
          title: '革新的なIP',
          description: 'モーター制御アルゴリズム＆ソフトウェア、デジタルパワー、センサーフュージョン、自律モーションスタック'
        },
        mbse: {
          title: 'モデルベースシステムエンジニアリング',
          description: 'シミュレート – 検証サイクルとビルド – 検証サイクル'
        },
        catalog: {
          title: 'カタログ＆マーケットプレイス',
          description: 'コア製品とマーケットプレイスエコシステム'
        },
        plugNPlay: {
          title: 'プラグアンドプレイモデル',
          description: 'モーション製品、ユーザー、アプリケーション、環境'
        },
        digitalTwin: {
          title: 'デジタルツイン',
          description: 'コネクテッドエッジとIoTクラウドインフラストラクチャによるリモートモニタリングとアップデート'
        }
      }
    },
    // Ecosystem
    ecosystem: {
      title: 'タクミエコシステム',
      items: [
        'タクミモーションマジックプラットフォーム＆コア製品',
        'パートナーエコシステム',
        'PoC＆プロトビルド',
        '分解、ベンチマーキング、コスト計算',
        '価値分析＆価値エンジニアリング',
        'モーター – コントローラーキャリブレーション',
        '製品認定、コンプライアンス認証、ホモロゲーション'
      ]
    },
    // Products
    products: {
      title: '製品',
      domains: {
        title: 'ドメイン - アプリケーション',
        transportation: '輸送',
        industrial: '産業'
      },
      core: {
        title: 'コア製品',
        motors: {
          title: 'モーター + モーターコントローラー',
          items: [
            'ブラシDC、ブラシレスDC、PMSMモーター、サーボモーター',
            'Infineon、TI、Renesas、Microchipベースのモーターコントローラー',
            '対応：12V – 96V / 100W – 33KW',
            '予定：240V – 1200V / 33KW – 1200KW'
          ]
        },
        controllers: {
          title: 'インテリジェントアプリケーションコントローラー',
          items: [
            'Renesas、NXP、Microchipコントローラーベース',
            '特定のアプリケーション、環境、ユーザー向けのスマートコントロール',
            'リモート接続用のオプションのテレマティクスユニット統合'
          ]
        },
        telematics: {
          title: 'テレマティクスユニット',
          items: ['GPS + IMU（加速度計 + コンパス）', '4G/5G', 'WiFi + BT/BLE']
        }
      },
      partner: {
        title: 'パートナー製品',
        sensors: 'センサー',
        hmi: 'HMI',
        battery: 'バッテリー + BMS',
        accessories: 'アクセサリー'
      },
      evMatrix: {
        title: 'EVパワートレイン製品'
      },
      intelligentMatrix: {
        title: 'インテリジェントモーションアプリケーション'
      }
    },
    // Partnerships
    partnerships: {
      title: 'エンジニアリングパートナーシップ＆アライアンス',
      subtitle: 'グローバルテクノロジーリーダーとの協力'
    },
    // Team
    team: {
      title: 'チーム',
      subtitle: 'モデルベースシステムエンジニアリング、ハードウェアエンジニアリング、ソフトウェアエンジニアリング、PoC/プロトタイプ製造、システム統合 – キャリブレーション – 検証に特化した統合システム/製品エンジニアリングチーム。',
      members: {
        britto: {
          name: 'ブリット EV',
          role: '創業者 & 社長',
          bio: '日本企業で20年以上の経験を持つ電気エンジニア。日本のモーターエコシステムとの強いつながりを持つ。インドのイノベーションを信じる。'
        },
        aravind: {
          name: 'アラビンド・プラサス',
          role: '創業者',
          bio: 'パワーエレクトロニクスとモーター制御で20年以上の経験。インドで50%以上のシェアを持つBLDC天井扇風機ソリューションを作成したイノベーター。'
        },
        prasanth: {
          name: 'プラサンス B',
          role: '創業者',
          bio: 'モデルベース設計を専門とする12年間の車両エンジニア。多くの電気自動車トランスミッションシステムのモデルに取り組んできた。'
        },
        mohara: {
          name: '茂原 敏成',
          role: '取締役',
          bio: 'ホンダR&DからFCCボードに参加した経験豊富なパワートレインエンジニア。先見の明のあるリーダーで、現在CASEイニシアチブを率いている。'
        },
        shimogaki: {
          name: '下垣 Y',
          role: 'アドバイザー',
          bio: 'ホンダR&DからFCCボードに参加した経験豊富なパワートレインエンジニア。先見の明のあるリーダーで、現在CASEイニシアチブを率いている。'
        }
      }
    },
    // Facilities
    facilities: {
      title: '施設＆認証',
      locations: {
        kyoto: {
          name: 'タクミ – 京都',
          description: '技術パートナーシップ – 市場調査'
        },
        bangalore: {
          name: 'タクミ – バンガロール',
          description: 'エンジニアリングとPoC＆プロト生産'
        },
        tenkasi: {
          name: 'タクミ – テンカシ',
          description: 'エンジニアリング、生産＆テストラボ'
        }
      },
      certifications: ['ISO 9001:2015', 'ISO 14001:2015', 'ISO 27001:2013', 'ESD協会']
    },
    // Contact
    contact: {
      title: 'お問い合わせ',
      subtitle: 'ビジョンを実現するための議論をしましょう',
      form: {
        name: 'お名前',
        email: 'メールアドレス',
        company: '会社名',
        subject: '件名',
        message: 'メッセージ',
        submit: '送信',
        sending: '送信中...',
        success: 'メッセージが送信されました！',
        error: '送信に失敗しました。もう一度お試しください。'
      }
    },
    // Footer
    footer: {
      newsletter: {
        title: 'ニュースレターに登録',
        placeholder: 'メールアドレスを入力',
        submit: '登録',
        success: '登録が完了しました！',
        error: '登録に失敗しました。もう一度お試しください。'
      },
      links: {
        about: '会社概要',
        products: '製品',
        careers: '採用情報',
        contact: 'お問い合わせ'
      },
      social: 'フォローする',
      copyright: '© 2026 タクミモーションコントロールズ株式会社 全著作権所有。',
      terms: '利用規約',
      privacy: 'プライバシーポリシー'
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('takumi-language');
    return saved || 'en';
  });

  useEffect(() => {
    localStorage.setItem('takumi-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'jp' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
