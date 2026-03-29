// ═══════════════════════════════════════════════════════════════
//  GLORY ELEVN — PRODUCTEN BEHEER
//  Dit is het ENIGE bestand dat je aanpast om producten te beheren.
//
//  HOE WERKT HET?
//  - Kopieer een bestaande regel om een nieuw product toe te voegen
//  - Verander de waarden naar jouw product
//  - Sla op en upload naar GitHub → klaar!
//
//  FOTO'S:
//  Upload foto's via de GitHub app op je telefoon naar de images/ map.
//  Gebruik dan: fotos:['images/IMG_1234.jpg', 'images/IMG_1235.jpg']
//  De naam is exact de bestandsnaam die GitHub geeft na upload.
//
//  CATEGORIEËN: 'new' | 'retro' | 'kids' | 'training' | 'interland'
//  BADGE:        'new' | 'sale'  | 'kids' | 'training' | 'interland'
//  SALE PRIJS:   Vul de ORIGINELE (hogere) prijs in bij sale:''
//                Laat leeg ('') als er geen sale is.
// ═══════════════════════════════════════════════════════════════

const products = [

  // ────────────────────────────────────────────────────────
  //  🆕  NEW ARRIVALS
  // ────────────────────────────────────────────────────────

  {
    naam:    'Bayern München 3rd kit 25/26',
    prijs:   '€45',
    sale:    '',                    // Originele prijs als het sale is, anders leeg laten
    cat:     'new',
    badge:   'new',
    maten:   ['S','M','L','XL','XXL'],
    spelers: ['Müller','Kane','Kimmich'],
    fotos:   [
      'https://gloryelevn.com/cdn/shop/files/503F2325-84D7-41DE-9AAA-DDED468973BA.png?v=1758477625&width=800',
      'https://gloryelevn.com/cdn/shop/files/6F464302-97ED-43D1-B921-3D78C2ACD94E.png?v=1758477625&width=800',
      'https://gloryelevn.com/cdn/shop/files/88FE1224-799F-46E6-A1B1-1F992865EB9D.jpg?v=1758477502&width=800',
    ]
  },
  {
    naam:    'Juventus 3rd kit 25/26',
    prijs:   '€45',
    sale:    '',
    cat:     'new',
    badge:   'new',
    maten:   ['S','M','L','XL','XXL'],
    spelers: ['Vlahović','Yildiz','Locatelli'],
    fotos:   [
      'https://gloryelevn.com/cdn/shop/files/A1B60002-FE10-49E1-B243-8F10B29337E8.png?v=1758477540&width=800',
      'https://gloryelevn.com/cdn/shop/files/919E4B88-DBA7-495B-9DF4-0EA78289089A.png?v=1758477540&width=800',
    ]
  },
  {
    naam:    'Real Madrid home 25/26',
    prijs:   '€45',
    sale:    '',
    cat:     'new',
    badge:   'new',
    maten:   ['S','M','L','XL','XXL'],
    spelers: ['Mbappé','Bellingham','Vinicius'],
    fotos:   [
      'https://gloryelevn.com/cdn/shop/files/8B9C7059-C2DD-4E17-B0AF-A50AA588E994.jpg?v=1757079685&width=800',
      'https://gloryelevn.com/cdn/shop/files/07B8CE84-32DC-4486-92F5-E5CD4F3A53EC.jpg?v=1757079684&width=800',
      'https://gloryelevn.com/cdn/shop/files/A0781ABF-431D-47CE-BEF3-35733CC0C39F.jpg?v=1757079684&width=800',
    ]
  },
  {
    naam:    'Real Madrid away 25/26',
    prijs:   '€45',
    sale:    '',
    cat:     'new',
    badge:   'new',
    maten:   ['S','M','L','XL','XXL'],
    spelers: ['Mbappé','Bellingham','Vinicius'],
    fotos:   [
      'https://gloryelevn.com/cdn/shop/files/0B87A734-E1BB-4D03-9486-346126052D7E.jpg?v=1757087749&width=800',
      'https://gloryelevn.com/cdn/shop/files/67065F0D-BE57-4E2F-B475-A986B371F0E5.jpg?v=1757087749&width=800',
    ]
  },
  {
    naam:    'Real Madrid 3rd 25/26',
    prijs:   '€45',
    sale:    '',
    cat:     'new',
    badge:   'new',
    maten:   ['S','M','L','XL','XXL'],
    spelers: ['Mbappé','Bellingham','Vinicius'],
    fotos:   [
      'https://gloryelevn.com/cdn/shop/files/4EEA32C8-4B81-4D8C-86A0-380CAC7DBAE3.jpg?v=1757079283&width=800',
      'https://gloryelevn.com/cdn/shop/files/02908771-922E-4D8F-8135-8F4793A7B638.jpg?v=1757079283&width=800',
    ]
  },
  {
    naam:    'Liverpool home 25/26',
    prijs:   '€45',
    sale:    '',
    cat:     'new',
    badge:   'new',
    maten:   ['S','M','L','XL','XXL'],
    spelers: ['Salah','Núñez','Alexander-Arnold'],
    fotos:   [
      'https://gloryelevn.com/cdn/shop/files/A1014F13-5B71-48FE-AA3F-BD9973BD989C.webp?v=1757084024&width=800',
      'https://gloryelevn.com/cdn/shop/files/613A33E3-D8A7-44D6-B8A6-357786A4F023.jpg?v=1757084025&width=800',
    ]
  },
  {
    naam:    'Manchester City home 25/26',
    prijs:   '€45',
    sale:    '',
    cat:     'new',
    badge:   'new',
    maten:   ['S','M','L','XL','XXL'],
    spelers: ['Haaland','De Bruyne','Gündogan'],
    fotos:   [
      'https://gloryelevn.com/cdn/shop/files/250FE27A-5313-42ED-9078-D88CE947D773.jpg?v=1757079684&width=800',
      'https://gloryelevn.com/cdn/shop/files/7A5E672B-B942-443B-B678-EB2FDA7D5691.jpg?v=1757079684&width=800',
    ]
  },
  {
    naam:    'Manchester City away 25/26',
    prijs:   '€45',
    sale:    '',
    cat:     'new',
    badge:   'new',
    maten:   ['S','M','L','XL','XXL'],
    spelers: ['Haaland','De Bruyne','Foden'],
    fotos:   [
      'https://gloryelevn.com/cdn/shop/files/37003AB9-484B-4540-A272-D0CDA358C760.jpg?v=1757079538&width=800',
      'https://gloryelevn.com/cdn/shop/files/523D92B0-5D0B-45EC-804F-60FF40F3A6A6.jpg?v=1757079538&width=800',
    ]
  },
  {
    naam:    'PSV home 25/26',
    prijs:   '€45',
    sale:    '',
    cat:     'new',
    badge:   'new',
    maten:   ['S','M','L','XL','XXL'],
    spelers: ['Tillman','Pepi','Dest'],
    fotos:   [
      'https://gloryelevn.com/cdn/shop/files/57F91F27-480A-4418-903A-AF9D36F2E11F.jpg?v=1757079827&width=800',
      'https://gloryelevn.com/cdn/shop/files/64CA1C42-B9F5-4B4D-8681-56E7FFF25017.jpg?v=1757079827&width=800',
    ]
  },
  {
    naam:    'Napoli home 25/26',
    prijs:   '€45',
    sale:    '',
    cat:     'new',
    badge:   'new',
    maten:   ['S','M','L','XL','XXL'],
    spelers: ['Lukaku','Kvara','Di Lorenzo'],
    fotos:   [
      'https://gloryelevn.com/cdn/shop/files/F7671892-3CD2-4085-9A76-F8355D7B3530.jpg?v=1757079613&width=800',
      'https://gloryelevn.com/cdn/shop/files/A3CF4B94-FEBE-4AEC-9170-6965B5A26DC0.jpg?v=1757079613&width=800',
    ]
  },
  {
    naam:    'Napoli away 25/26',
    prijs:   '€45',
    sale:    '',
    cat:     'new',
    badge:   'new',
    maten:   ['S','M','L','XL','XXL'],
    spelers: ['Lukaku','Kvara','Raspadori'],
    fotos:   [
      'https://gloryelevn.com/cdn/shop/files/6BF25E1F-65FE-4A4F-B3AD-C3C889E62A60.jpg?v=1757079684&width=800',
      'https://gloryelevn.com/cdn/shop/files/04DA9AA4-72C4-4B15-AC76-CE254CC17491.jpg?v=1757079684&width=800',
    ]
  },
  {
    naam:    'Arsenal 3rd kit 25/26',
    prijs:   '€45',
    sale:    '',
    cat:     'new',
    badge:   'new',
    maten:   ['S','M','L','XL','XXL'],
    spelers: ['Saka','Ødegaard','Havertz'],
    fotos:   [
      'https://gloryelevn.com/cdn/shop/files/42BEC12F-7953-43D0-AABE-13615FA219B4.webp?v=1756847512&width=800',
      'https://gloryelevn.com/cdn/shop/files/49997B67-AC32-4703-B8D3-A14B21A2B2EB.webp?v=1756847512&width=800',
    ]
  },
  {
    naam:    'Barcelona Home 25/26',
    prijs:   '€40',
    sale:    '',
    cat:     'new',
    badge:   'new',
    maten:   ['S','M','L','XL','XXL'],
    spelers: ['Lewandowski','Pedri','Yamal'],
    fotos:   [
      'https://gloryelevn.com/cdn/shop/files/IMG-4769.jpg?v=1756848013&width=800',
      'https://gloryelevn.com/cdn/shop/files/4CF1355E-C6C8-4390-BB1A-DEA20AFFCD00.jpg?v=1756848013&width=800',
    ]
  },
  {
    naam:    'Barcelona Away 25/26',
    prijs:   '€45',
    sale:    '',
    cat:     'new',
    badge:   'new',
    maten:   ['S','M','L','XL','XXL'],
    spelers: ['Lewandowski','Pedri','Yamal'],
    fotos:   [
      'https://gloryelevn.com/cdn/shop/files/C96DC29E-62D7-4C34-8B43-3E69E3FC2E40.jpg?v=1756233321&width=800',
      'https://gloryelevn.com/cdn/shop/files/5A3AF9BA-8BA4-43FB-AF3A-8000EA118225.jpg?v=1756233321&width=800',
    ]
  },
  {
    naam:    'Barcelona 3rd 25/26',
    prijs:   '€45',
    sale:    '',
    cat:     'new',
    badge:   'new',
    maten:   ['S','M','L','XL','XXL'],
    spelers: ['Lewandowski','Pedri','Yamal'],
    fotos:   [
      'https://gloryelevn.com/cdn/shop/files/0A9AC4B1-C165-4E47-A4BF-FBD5F299C876.jpg?v=1757079332&width=800',
      'https://gloryelevn.com/cdn/shop/files/BF7DB90C-2704-4368-8D08-92184255BD6F.jpg?v=1757079332&width=800',
    ]
  },
  {
    naam:    'Corinthians special jersey',
    prijs:   '€45',
    sale:    '',
    cat:     'new',
    badge:   'new',
    maten:   ['S','M','L','XL','XXL'],
    spelers: ['Yuri Alberto','Rodrigo Garro'],
    fotos:   [
      'https://gloryelevn.com/cdn/shop/files/4B85B8EC-1B05-4CCC-82EC-2414FCC490C2.jpg?v=1757079684&width=800',
      'https://gloryelevn.com/cdn/shop/files/FCAA40B3-7FF3-490B-B34D-7E419D58E760.jpg?v=1757079684&width=800',
    ]
  },

  // ────────────────────────────────────────────────────────
  //  👦  KIDS
  // ────────────────────────────────────────────────────────

  {
    naam:    'Barcelona 3rd 25/26 tenue kids',
    prijs:   '€45',
    sale:    '',
    cat:     'kids',
    badge:   'kids',
    maten:   ['128','140','152','164','176'],
    spelers: ['Lewandowski','Pedri','Yamal'],
    fotos:   [
      'https://gloryelevn.com/cdn/shop/files/B7C68736-3181-495D-B30E-82D5AAC2D411.jpg?v=1756847389&width=800',
      'https://gloryelevn.com/cdn/shop/files/160BE4FD-7067-43E3-B6E0-AEBFDA344C9D.jpg?v=1756847389&width=800',
    ]
  },
  {
    naam:    'AC Milan 25/26 Kids/Adults',
    prijs:   '€60',
    sale:    '',
    cat:     'kids',
    badge:   'kids',
    maten:   ['128','140','152','164','S','M','L','XL'],
    spelers: ['Leão','Pulišić','Reijnders'],
    fotos:   [
      'https://gloryelevn.com/cdn/shop/files/1B3A1425-E3DF-4D12-94DE-A7FB353F9C43.jpg?v=1761227605&width=800',
      'https://gloryelevn.com/cdn/shop/files/1056046E-8B30-40E2-A094-73EF5EB67039.jpg?v=1761227605&width=800',
    ]
  },

  // ────────────────────────────────────────────────────────
  //  ⚡  RETRO / CLASSICS
  // ────────────────────────────────────────────────────────

  {
    naam:    'Santos black 2012/13 Neymar',
    prijs:   '€45',
    sale:    '€100',                // Was €100, nu €45
    cat:     'retro',
    badge:   'sale',
    maten:   ['S','M','L','XL'],
    spelers: ['Neymar'],
    fotos:   [
      'https://gloryelevn.com/cdn/shop/files/E447AF3E-DC21-4398-A599-FA2C46EFEF9D.jpg?v=1756847388&width=800',
      'https://gloryelevn.com/cdn/shop/files/25A99960-F1A0-4660-BC07-34FEEF5BDCBE.jpg?v=1756847388&width=800',
    ]
  },
  {
    naam:    'Santos 2011 home Neymar',
    prijs:   '€45',
    sale:    '€80',
    cat:     'retro',
    badge:   'sale',
    maten:   ['S','M','L','XL'],
    spelers: ['Neymar'],
    fotos:   [
      'https://gloryelevn.com/cdn/shop/files/IMG-4633.jpg?v=1756326765&width=800',
      'https://gloryelevn.com/cdn/shop/files/AA122669-6F55-435B-B314-F9D279198949.jpg?v=1756326765&width=800',
    ]
  },
  {
    naam:    'Santos 2011 away Neymar',
    prijs:   '€45',
    sale:    '€80',
    cat:     'retro',
    badge:   'sale',
    maten:   ['S','M','L','XL'],
    spelers: ['Neymar'],
    fotos:   [
      'https://gloryelevn.com/cdn/shop/files/CE78D485-E687-45C9-A38C-5A3B52F1154B.jpg?v=1756325727&width=800',
      'https://gloryelevn.com/cdn/shop/files/4B89C264-AB6C-4837-B267-C4755312EE92.jpg?v=1756325727&width=800',
    ]
  },
  {
    naam:    'AC Milan 06/07 Final Away',
    prijs:   '€45',
    sale:    '€80',
    cat:     'retro',
    badge:   'sale',
    maten:   ['S','M','L','XL','XXL'],
    spelers: ['Kaká','Inzaghi','Pirlo'],
    fotos:   [
      'https://gloryelevn.com/cdn/shop/files/40796C5C-4A0B-429C-BC78-C184874D742C.jpg?v=1756233941&width=800',
      'https://gloryelevn.com/cdn/shop/files/1595C5A0-C0C9-4FFD-A8CE-C3E140289F46.jpg?v=1756233941&width=800',
    ]
  },
  {
    naam:    'AC Milan home 2006',
    prijs:   '€45',
    sale:    '€80',
    cat:     'retro',
    badge:   'sale',
    maten:   ['S','M','L','XL','XXL'],
    spelers: ['Kaká','Inzaghi','Shevchenko'],
    fotos:   [
      'https://gloryelevn.com/cdn/shop/files/49D85DCE-F7C2-4704-84EB-6CBE299C7BAF.jpg?v=1756232035&width=800',
      'https://gloryelevn.com/cdn/shop/files/9D1868AA-9348-4781-9E2B-112B82FA1109.jpg?v=1756153014&width=800',
    ]
  },
  {
    naam:    'Ajax 01/02 away jersey',
    prijs:   '€45',
    sale:    '€80',
    cat:     'retro',
    badge:   'sale',
    maten:   ['S','M','L','XL','XXL'],
    spelers: ['Kluivert','Overmars','Litmanen'],
    fotos:   [
      'https://gloryelevn.com/cdn/shop/files/E95BF6C6-CE06-47EE-AB7A-91EFDACEF1F6.jpg?v=1756153013&width=800',
      'https://gloryelevn.com/cdn/shop/files/A0BE4BF4-719E-4DCF-B1EA-A33E8D94115A.jpg?v=1756153013&width=800',
    ]
  },
  {
    naam:    'Barcelona special edition',
    prijs:   '€45',
    sale:    '€80',
    cat:     'retro',
    badge:   'sale',
    maten:   ['S','M','L','XL','XXL'],
    spelers: ['Lewandowski','Pedri'],
    fotos:   [
      'https://gloryelevn.com/cdn/shop/files/EF216BF0-C12A-4A88-8E55-E59CCA6381C1.jpg?v=1756232401&width=800',
      'https://gloryelevn.com/cdn/shop/files/6C462624-E883-499D-AEA3-3F5CFA6997B2.jpg?v=1756232401&width=800',
    ]
  },
  {
    naam:    'Chelsea home 25/26',
    prijs:   '€45',
    sale:    '€100',
    cat:     'retro',
    badge:   'sale',
    maten:   ['S','M','L','XL','XXL'],
    spelers: ['Palmer','Jackson','Enzo'],
    fotos:   [
      'https://gloryelevn.com/cdn/shop/files/573BEF99-22C3-4B44-8EEF-C2B15D344C49.jpg?v=1756847389&width=800',
      'https://gloryelevn.com/cdn/shop/files/4F35BCEA-ADB3-4730-846C-6226710E77AF.jpg?v=1756847389&width=800',
    ]
  },
  {
    naam:    'Corinthians away 25/26',
    prijs:   '€45',
    sale:    '€100',
    cat:     'retro',
    badge:   'sale',
    maten:   ['S','M','L','XL','XXL'],
    spelers: ['Yuri Alberto','Rodrigo Garro'],
    fotos:   [
      'https://gloryelevn.com/cdn/shop/files/BB81D412-9DFF-4CAA-930E-1A5A8E7EE0A9.jpg?v=1756847390&width=800',
      'https://gloryelevn.com/cdn/shop/files/47100487-DD97-436C-8786-F05030773FB4.jpg?v=1756847389&width=800',
    ]
  },

  // ────────────────────────────────────────────────────────
  //  🧥  TRAININGSPAKKEN  — voeg hieronder toe
  // ────────────────────────────────────────────────────────

  // Voorbeeld (verwijder de // om te activeren):
  // {
  //   naam:    'Chelsea trainingspak 25/26',
  //   prijs:   '€75',
  //   sale:    '',
  //   cat:     'training',
  //   badge:   'training',
  //   maten:   ['S','M','L','XL'],
  //   spelers: ['Palmer'],
  //   fotos:   ['images/IMG_1234.jpg', 'images/IMG_1235.jpg'],
  // },

  // ────────────────────────────────────────────────────────
  //  🌍  INTERLAND  — voeg hieronder toe
  // ────────────────────────────────────────────────────────

  // Voorbeeld (verwijder de // om te activeren):
  // {
  //   naam:    'Nederland Thuis 24/25',
  //   prijs:   '€50',
  //   sale:    '',
  //   cat:     'interland',
  //   badge:   'interland',
  //   maten:   ['S','M','L','XL','XXL'],
  //   spelers: ['Van Dijk','Dumfries','Gakpo'],
  //   fotos:   ['images/IMG_5678.jpg'],
  // },

];
