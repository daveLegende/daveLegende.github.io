'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7ef893a2ad4bd8b8d91aff45ad0e1595",
".git/config": "0b45309746b98d720d4f289e7e564fc2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "87929a35ce451517b38625f923767ec6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d73b139a07a36d27667088f4de26bc31",
".git/logs/refs/heads/main": "5b0d0e96f907da15dbcfcef80405face",
".git/logs/refs/remotes/origin/main": "f6ac38377485c17d7a8325826a871ee9",
".git/objects/02/212f228e53eebbe6326cd8628eac09e98de0d6": "edf9a34dcdd9b70947be401f388a05b2",
".git/objects/02/35cb391eee4e8384d26df01a604965efb6271e": "dd65d400957d0bdc4e46bd31cb6b00a3",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/7e9ca406932cf4e72f464f75b0b4c50b20d34f": "d0295cc5e0863a412be3ceac05fff4d8",
".git/objects/0b/1e4dd993e2d41282a677634f77b1399154356f": "255bcff5aee7b673d792ad19736de4a4",
".git/objects/10/06f95ed36a359d9444f59becbf76c7cffe3f68": "623bd374137389f14e9bfc53fe0d6c3e",
".git/objects/16/1738db98f01f8917217b497917b84e5022fee9": "bb8fd27e972a303b60f5d109e4d41b33",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/17/83722478436405f1f5c53b0569fdccd80e6647": "9585b5036e8a82f81142ed85fd7aa730",
".git/objects/18/e3a4a6996c652fa29aee5516dfe4af0986eb07": "71ec6b079ea20740e92623e5b8e9e669",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/a82210dd86193d11f99114be584047e3a5a4bd": "cd00ab67b3d332ef153b64ef613f331e",
".git/objects/23/3088a073999bdf8d353cb25d7ed818495838ff": "a787547819806e4e4cbd053848376aeb",
".git/objects/27/06eeb9b3fd443df7c037b9d9870d0c9ea5449f": "ec253d0eb6a9848ec573706485251dd5",
".git/objects/28/83a440a476623d966cc1a02be0c5b18dce97e1": "85b6bce1b17668e0f39c7be7c0d1f871",
".git/objects/29/dff7c2b5cf2615f634f0e5597fa652cd60d636": "3c41db162090cf4e7a97b53dfc19dc26",
".git/objects/2a/b5215393c0085b3c498c0b5c7f07f89a653fa9": "19cf28855a180d184b4ff3611e96b503",
".git/objects/2d/adc8aa493aac6be41cfb1a0ee75442392a69ec": "c9cac7ba865248c6a447fba60960fa7d",
".git/objects/2e/b6bfe72ed1addcd32ae295ea380cfbd934fd57": "5458d70ab734786653d233c00a080756",
".git/objects/33/688f99dcbc91621a9ad452ce676675c73ea8cb": "81defdefa61f079413196d8347a25970",
".git/objects/3a/fca91e367e9a4457570c9f1dfb291f328f59a5": "4ffc2ef627daa2a332588d0c79f4c426",
".git/objects/3e/30dbe473d1102855588a3b49b1eb5b3993a04e": "2902ac951abd9a5b83d0e9f4cb8292d1",
".git/objects/3e/507d9d0d16a4778ac101321b89244ffc312bbc": "a7cd1312f54855e6b285b7c395bd035d",
".git/objects/40/96020cad5932c34d323c61d76b12d5c39ab429": "c73cf22dfec359a08bce7fc4993d73ca",
".git/objects/41/b0ef8639f1c48aaea3c399cb53c15e6083d350": "f21c8f326a1c33008c7868001c8f9da3",
".git/objects/41/be8e5ec63a240dc2100d291384ffb3b288af07": "d90cd83115728a4ded3d518ee72efec3",
".git/objects/45/f3499d27f5e06c6be9de173bfddd912f405e4a": "571ef582b4065622ca5827c1435b8ea9",
".git/objects/47/2b6fb4d18a0261920840dc546348743ef097db": "11948a92de4e381b95ecb021ecdb2960",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4d/daf64718655d1f5ffb56d6e8461d8104c1cc05": "20258e7d1bd4e2aa7d4f2e6546bd7db4",
".git/objects/4f/ec16e6b459bf1744152b7da6c901137d6337bd": "b939794ae72592f06f656f63de3a8cbf",
".git/objects/52/3c9ba88f34dad7e978eb2e8159c1235f4b70af": "47259018fbcfd3b65fcb7d27c6704e68",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/61/f99332d4250353bde6d57e6840c6c46d5cc3f2": "20cefc2de091f3b158a3ee199cf1c907",
".git/objects/6d/3943600d8e5d7e990b5ba06a834ee3e589fa01": "f5ec9701de6e200cc3dbe58166453f99",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/72/fd9c2c73cb766c905ef912a352f50c8ee76490": "28e67a211f36445f350348455e884940",
".git/objects/73/eb59e06fa00c56263af03029d51a79152f1d23": "5982fdf2f48555bb21b4ae62567a4288",
".git/objects/74/27394724457529611446d38d27be5eb95b3bad": "291ac00ff0c237db97c1a1add0551ba8",
".git/objects/80/80ef5277dc26fdf64ca4c8f557018b221c16bd": "c9ab247ed7fe3ba5228ced1506235e38",
".git/objects/84/0fe8a5f52a23829ddc8495c295690aa369151d": "9c7bb9c736b80fd0388611991ef894bc",
".git/objects/88/1ebfadb1cae4fd74f01c8ef59d8f7248021b8a": "4445b9bced7e22da89bb1696ccef75c0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/a6115c61fa64c76b454c6554a1f49d73f24578": "20d977a7a224dbf6f6508b32b7169308",
".git/objects/91/a1dc870b1a37062e33e4f2920cd6cad0fbc67e": "cbddfbb5e19b8f8af2a1addeddaae78f",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/45a89d8968ec05cc6eeca3d4cd298af022f76d": "90c23c3ebf2475333baa899e49e7f4e4",
".git/objects/9d/9db6fe9f3b3de30b5b1f21eb43c5ae08b1d0a0": "cab0b9bf7c9ceff01cd78966e4665678",
".git/objects/a5/cdfe7e7fcdb49f9d4ce1872badbee40e074701": "04ebc9b2fb44135f40733e8e4ed5141c",
".git/objects/a5/eced0ab1e3f84d43539516e02e108395a2c31b": "b0af577cf4b0d8a1a628e5dbf225318a",
".git/objects/a7/2cc2218668e63123fe641854db76a172cfba8b": "d292f1d6085b23b579e8faae809c7c1a",
".git/objects/ab/39e746ab681938c55d19b8ac56f3ad5aa907f5": "f79ec6640a6c2e60ecb0799988bf0d53",
".git/objects/ae/05cbd15a019b18cce75a6cc05bf022019e5794": "77088728c61a5277337149b70ce24b2d",
".git/objects/ae/60e18299f7544544480c2a39f0dba5cf035fdc": "770edf289730e4e9998539146f79eb82",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/af/901332cf971b2a371e9d79b8054d2c3e25ed79": "d708b1a9b79517ebb94ec11305ac6cb3",
".git/objects/b0/01e257e0cacdff3e405955f5175693ad451777": "5988c44d91d20fdb56c841de749259c6",
".git/objects/b0/8ce5e766f1c5fa630b641ba31f5aad3d9f36ea": "7f8f0391535bd7bd00432d7e869a4a05",
".git/objects/b2/d0f7ab222f23568aa95a2c159eb4ebe790a411": "3a1826b54521180d9e41a0c2871a07e2",
".git/objects/b3/9a432fa2c723557f702748d43756a45f0d3981": "99dccca73b685156138bcbd196b764bc",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/ab36a979f1217f500c60776a93dac977d86cfd": "eac621e118bf970016fe794f3ae0a97b",
".git/objects/b5/af92c3843d8a52624c7cdeed06bb20973a99f9": "86bdf95698c2ebe316fa7d68916dd83e",
".git/objects/b6/88fe1614257db40fc47635dbae14e229866f78": "5628d28dee85f0f3f6e753a5ee641fba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bf/9bff48016f8edcbdafc1f970a1f65558202a3d": "cf6c88d709823d07918932e2aff475f1",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/74130b7abdd3fea24a1f02b21f8e4bf4535ccb": "6b69dcea9a7e7359a9ce031e2a266b90",
".git/objects/c8/28b74175214c0dc71ac71a385d6261d2012c2c": "5b8300ef1ff0bb87202a552c442b000b",
".git/objects/c9/543458560f3095039fbd6a92726c0faf0dc438": "75474261660675106c81a9141d1e277b",
".git/objects/cc/c5dc322c0fe9389e182b5cc5d30ad9bff0d2d5": "ae23040004a1cbb1961c3640d2d7f48a",
".git/objects/d3/a765a0b43331a6c88f8b24df0cfea22c8d3ec9": "73fc0311ad536cf030585eaef5009c5c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/5aece88d2d63a8b8b999c349a14df9a3099c3a": "753828343629218655ed5d0f1268daae",
".git/objects/db/745a4a746a0f45f82681743def582771c06a22": "75cbdca63fb69e0692e26b334712b420",
".git/objects/dd/bd1ef43500bd4512b98823c4e58d208e4185b7": "2be56abc04500e6cae2cd8d5585581d3",
".git/objects/e1/50a3e6862080710ac63528da1797cd1a4d446e": "522f9ddd963164ff17dd22cdd8cab0cf",
".git/objects/e1/a8244f308133c16f67a3113b396f2ba84873dc": "8f2dec63fa7fad905b84b3c56bc2ccf9",
".git/objects/e2/2fe0cc761c6e9b11816c13d036141a9d1712f9": "dcbe5622d8288d650e98dc4fbdcbbe87",
".git/objects/e4/75ed337931c52c439fc9c78c473f5cb53223ee": "31a8a12c6eee4fc4b934fbb92e012cac",
".git/objects/e6/1adc9b927f5f4f9d605f8fc852de9ed01e4d55": "f4c3480fb7a264dd15d7ebe9d85b6bbb",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/df2cd7fda42f658e7809a6306757a544a8fe41": "1bfc73dafb33cdbdd18dc97cd4695714",
".git/objects/e8/e48b296fff4024758af29f3b47365c919af93a": "7036a1b012fa44aaef0689af7c4e5fff",
".git/objects/eb/b1cc9e6a3e0f0e9b23ebf97c27e27aa8415b15": "6b324a9861ab99d81b4724dee542218e",
".git/objects/ed/e601bb4d9d9cdf9c83f008b39462c8b5fb8b75": "fc563966856cda62620c91b5ab38092b",
".git/objects/ef/d21cd2a333a831af9882bfa6e0e57b7920f888": "294e0980b98a011bcacbf211ef9c2e17",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fc/1ed02050fc663aee1df6481649d25e295e2201": "6e5bddcb7687e0d8e5dfd2a3246f547c",
".git/objects/fd/703d1f36b3ab7ec34deeb0dcf04e867db75265": "2bf9e456605aa1d76e5f42ef8aadcdae",
".git/refs/heads/main": "eb08e1710f2689f9687750dceb45b758",
".git/refs/remotes/origin/main": "eb08e1710f2689f9687750dceb45b758",
"assets/AssetManifest.bin": "3604405a875c03c67f6bb09c199a2b91",
"assets/AssetManifest.bin.json": "d9c8b59d9d4168ba96b74d5d94c3535b",
"assets/AssetManifest.json": "95b7baf1b6a3d923ebe6863411e91dda",
"assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/assets/icons/doc_file.svg": "552a02a5a3dbaee682de14573f0ca9f3",
"assets/assets/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/assets/icons/equipe.svg": "a7643ff2259c9613ec2f68e7f65dd64b",
"assets/assets/icons/excel_file.svg": "dc91b258ecf87f5731fb2ab9ae15a3ec",
"assets/assets/icons/Figma_file.svg": "0ae328b79325e7615054aed3147c81f9",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/google_drive.svg": "9a3005a58d47a11bfeffc11ddd3567c1",
"assets/assets/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/assets/icons/match.svg": "5f578afda4305ed02076431f265b24e7",
"assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/media_file.svg": "2ac15c968f8a8cea571a0f3e9f238a66",
"assets/assets/icons/menu_dashboard.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"assets/assets/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/icons/one_drive.svg": "aa908c0a29eb795606799385cdfc8592",
"assets/assets/icons/pdf_file.svg": "ca854643eeee7bedba7a1d550e2ba94f",
"assets/assets/icons/poules.svg": "11c79f506cf3176389f910c6791404ac",
"assets/assets/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/icons/sound_file.svg": "fe212d5edfddd0786319edf50601ec73",
"assets/assets/icons/ticket.svg": "c05d546c25a1023d4c3fe899f2a923a2",
"assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/icons/xd_file.svg": "38913b108e39bcd55988050d2d80194c",
"assets/assets/images/logo.png": "ab7d672509ee3530b4fab3fef6112797",
"assets/assets/images/profile_pic.png": "5f56c3070f1c066ae15ecad12fb44f54",
"assets/assets/images/zemoz.png": "78a6e0f15d3029d18c4a225dd9f0f00c",
"assets/assets/images/zmz.png": "eda2f49b5024fa52c0c9a84131157357",
"assets/assets/logos/alamy.jpg": "00b8849bf4a8da148c2344b74da16702",
"assets/assets/logos/art.jpg": "d2e11588f52cccbeb3b4fb7a3e2145d4",
"assets/assets/logos/champion.png": "5f2b1964fb9dc6be7cd21c88db7d266e",
"assets/assets/logos/default_logo.png": "6d89e4f71a2454e457b12ee7ef5ea42e",
"assets/assets/logos/deveron.png": "576c8133f0a11818bdc86aa53842b439",
"assets/assets/logos/fb.jpg": "5c1053b284dc687e4c66663c475ebe0d",
"assets/assets/logos/foot.png": "3bfc158ca1859a8fec27b035f4082c09",
"assets/assets/logos/ghom.jfif": "407fe26da69c6b06a21026d02b6c15bc",
"assets/assets/logos/ipsum.jpg": "e91fe992f7677d36dceb92833cafcecc",
"assets/assets/logos/jfa.jpg": "438617b2e405121e3bdf9cf042841292",
"assets/assets/logos/lorem.jpg": "7b3d3e78ad022cd8dd574b93612eaf1e",
"assets/assets/logos/off.jpg": "2d7db63c725ad347604ec653792bfd2d",
"assets/assets/logos/requin.jpg": "c4ec2e73e95b22d00e2d78a6428fae01",
"assets/assets/logos/sc.jpg": "7d6f8194b6e09c281cc60a6dbd34b225",
"assets/assets/logos/soccer.jpg": "643eb10dd09aa66f0e80cad45357d56a",
"assets/assets/logos/unknow.jpg": "22d29ab1f61bff673c4d1d6dede9e7f9",
"assets/assets/logos/vectoriel.jpg": "244d82097cc5ccdc55bf08d02a2d0505",
"assets/FontManifest.json": "7df10702a8c60a62e6694f43081d46e7",
"assets/fonts/MaterialIcons-Regular.otf": "a1ea316251dcbefff5fa808ec2295a51",
"assets/loading.gif": "7a63480a257cdcc94fea9fa407908cbf",
"assets/NOTICES": "a70bd83fdd578819742f9a6cce2cfbda",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "a526995c1bb1757579c9232dbc613897",
"/": "a526995c1bb1757579c9232dbc613897",
"main.dart.js": "75a8daf3a6347dea85aace82fb006c04",
"manifest.json": "df8ee12e5d40a884cc23acd0588bda1c",
"version.json": "e9eb58db72d407be27e9fa052224c304"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
