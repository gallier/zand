-- phpMyAdmin SQL Dump
-- version 4.4.12
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 06, 2017 at 10:42 AM
-- Server version: 5.6.19
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zand`
--

-- --------------------------------------------------------

--
-- Table structure for table `info`
--

CREATE TABLE IF NOT EXISTS `info` (
  `info_id` int(10) unsigned NOT NULL COMMENT 'pk',
  `info` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `info`
--

INSERT INTO `info` (`info_id`, `info`) VALUES
(1, 'Tetraëder kristalvorm, perfecte splijting volgens [110].\nStreek lichtbruin tot kleurloos.'),
(2, 'Perfecte splijting volgens [100].\nStreek zwart, grijs.'),
(3, 'Enizinds iridiserend.\nStreek zwart, groen.'),
(4, 'Systeem: monoklien (&amp;gt;250&amp;amp;ordm;)\nOnduidelijke splijting.\nStreek grijs, zwart.'),
(5, 'Kristalvorm kubisch en pentagondodekaëder.\nStreek groen, zwart.'),
(6, 'Perfecte splijting volgens [0001].\nStreek loodgrijs, blauw, groen.'),
(7, 'Systeem: 4/m-32/m\nSterk magnetisch.\nStreek zwart.'),
(8, 'Systeem: -32/m, bijna geen kristalstructuur, plaatvormig, botriodaal.\nConchoidaal.\nStreek rood, bruin.'),
(9, 'Systeem: 2/m2/m2/m, bijna geen kristalvorm.\nStreek roodbruin.'),
(10, 'Glasglans, doorzichtig tot doorschijnend.\nStreek kleurloos of wit.'),
(11, 'Veelal evenwijdige kleurstrepen.\nStreek wit.'),
(12, 'Splijting perfect volgens [1011]\nStreek wit, grijs.'),
(15, 'Splijting perfect volgens [011], schelpvormige breuk.\nStreek blauw.'),
(29, 'Romboëders, splijting perfect volgens [1011].\nStreek wit, kleurloos, rood, bruin.'),
(30, 'Splijting duidelijk volgens [010].\nStreek wit of kleurloos.'),
(31, 'Perfecte splijting volgen [201],botyroidaal.\nStreek groen, bleek.'),
(32, 'Streek wit.'),
(33, 'Transparant doorschijnend.\nStreek kleurloos, wit.'),
(34, 'Transparant to lichtdoorlatend.\nStreek kleurloos, wit.'),
(35, 'Conchodiale breuk, soms transparant.\nStreek wit, kleurloos.'),
(36, 'Oxide.<br>Metaalghlans.\r\nStreek zwrat, rood, bruin.'),
(37, 'Geen splijting, glasglans, doorzichtig tot doorschijnend.\nGekleurd door onzuiverheden.\nStreek wit.'),
(38, 'Bytryoïdaal, stalictisch of korstachtige vormen. Melkachtige gloed.\nStreek wit, kleurloos.'),
(39, 'Systeem triklien.\nGlas- tot parelmoerglans, doorzichtig tot doorschijnend.\nStreek wit.'),
(40, 'Semi transparant, laminaten.\nStreek wit, licht bruin.'),
(41, 'Transparant, laminaten.\nStreek wit.'),
(42, 'Geen splijting.\nMetaalglans.\nStreek goud.'),
(43, 'Geen splijting.\nMetaalglans.\nStreek zilver, wit.'),
(44, 'Geen splijting.\nMetaalglans.\nStreek koper rood.'),
(45, 'Perfecte splijting volgens [001].\nMetaalglans, gronderig, somber.\nStreek zwart, grijs.'),
(46, 'Geen perfecte splijting, congoidaal, oneven en bros.\nStreek wit.'),
(47, 'Perfecte splijting [111].\nStreek geen.'),
(48, '<b>Azurite</b> <br>Zelidja Mine (Zellidja Mine),Touissit, Touissit District, Oujda-Angad Province, Oriental Region, Morocco Size : 6,6x3,8cm.'),
(49, '<b>Goethite</b> <br>Minas Gerais, Brazil.'),
(50, '<b>Sharp, tetrahedral sphalerite crystals with minor associated chalcopyrite</b> <br>Idarado Mine, Telluride, Ouray District, Colorado, USA.'),
(51, '<b>Calcite, Galena</b> <br>Elmwood mine, Carthage, Central Tennessee Ba-F-Pb-Zn District, Smith County, Tennessee, USA.\r\n<br>Size: small cabinet, 6.9 x 6.0 x 4.4 cm Galena and Calcite'),
(52, '<b>Chalcopyrite</b> <br>Ballard Mine, Baxter Springs, Picher Field, Tri-State District, Cherokee County, Kansas, USA. <br>Size: 6.9 x 4.8 x 2.8 cm.'),
(53, '<b>Pyrrhotite, Sphalerite, Quartz</b> <br>Nikolaevskiy Mine, Dal''negorsk (Dalnegorsk; Tetyukhe; Tjetjuche; Tetjuche), Primorskiy Kray, Far-Eastern Region, Russia. <br>Size: 5.3 x 4.1 x 3.8 cm.'),
(54, '<b>Pyrite cubic crystals on marlstone</b> <br>Navajún, Rioja, Spain. <br>Size: 95 mm x 78 mm. '),
(55, '<b>Molybdenite on quartz</b> <br>Moly Hill mine, La Motte, Abitibi RCM, Abitibi-Témiscamingue, Québec, Canada <br>Size : 5.5 x 3 x 3 cm.'),
(56, '<b>Magnetite</b> <br>Cerro Huañaquino, Potosí Department, Bolivia. <br>Size: 6 x 5.8 x 2.6 cm.'),
(57, '<b>Hematite Trigonal iron oxide</b> <br>Ibitiara, Mina Gerais Brazil.'),
(58, '<b>Halite</b> Wieliczka Salt Mine, UNESCO World Heritage Site, Wieliczka, Makopolskie, Poland/<br>Size : 16 x 15 x 13cm.'),
(59, '<b>Fluorite</b> Okorusu Mine (Okarusu Mine), Otjiwarongo District, Otjozondjupa Region, Namibia.<br>Size: 4.8 x 4.5 x 1.9 cm.'),
(60, '<b>Calcite</b> Iraí, Alto Uruguai region, Rio Grande do Sul, South Region, Brazil.<br>Size: 13.4 x 10.5 x 6.5 cm.'),
(61, '<b>Dolomite and Talc</b> <br>Trimouns Talc Mine, Luzenac, Ariège, Midi-Pyrénées, France.<br>Size 10 x 6.2cm.'),
(62, '<b>Aragonite</b> <br>Retamal ravine, Enguidanos, Cuenca, Castile-La Mancha, Spain<br>Size 7.6 x 6.1 x 5.7 cm.'),
(63, '<b>Malachite</b> <br>Kolwezi, Western area, Katanga Copper Crescent, Katanga (Shaba), Democratic Republic of Congo (Zaïre).<br>Size: 10.1 x 6.3 x 4.6cm.'),
(64, '<b>Baryte</b> <br>Cerro Warihuyn (Huarihuyn), Miraflores, Huamalies Province, Huanuco Department, Peru.<br>Overall size: 56 mm x 53 mm.'),
(65, '<b>Celestine</b> <br>ajunga, Madagascar.<br>Size: 8.1 x 7.8 x 4.4 cm'),
(66, '<b>Anhydrite</b> <br>Naica Mine, Chihuahua, Mexico.'),
(67, '<b>Gypsum</b> <br>Lubin, Poland.'),
(68, '<b>Wolframite</b> (Ferberite), Apatite, Arsenopyrite, Zinnwaldite. <br>Spanje.<br>\r\nSize: 18 x 13 cm.'),
(69, '<b>Quartz</b> <br>La Gardette mine , Bourg d''Oisans, Isère France.<br>Size: 13 x 13 cm.'),
(70, '<b>Opal</b> <br>Slovakia.'),
(71, '<b>Kyanite</b> <br>Size: 7 cm.'),
(72, '<b>Biotite aggregate</b> <br>Wannenköpfe, Ochtendung, Eifel region, Germany. <br>Size: 2,5 cm.'),
(73, '<b>Gold</b> <br>Synthetic made gold crystals by the chemical transport reaction in chlorine gas. Purity &gt;99.99%'),
(74, '<b>Silver</b> <br>A pure (&gt;99.95%) silver crystal, synthetic electrolytic made with visible dendritic structures. Weight 11g. this image was made from 12 single pictures via focus stacking.'),
(75, '<b>Copper</b> <br>Native copper.<br>Size: ca. 4 cm.'),
(76, '<b>Graphite</b> <br>Old Beneis Farm, Marlborough, Cheshire County, New Hampshire, USA.<br>Size: 5.6 x 3.8 x 1.8 cm.'),
(77, '<b>Sulpher</b> sulphur crystals and calcite <br>Agrigento (Girgenti), Agrigento Province, Sicily, Ital.<br>Size : 22 x 18 x 6 cm'),
(78, '<b>Diamond</b> <br>A clear octahedral stone protrudes from a black rock.');

-- --------------------------------------------------------

--
-- Table structure for table `landen`
--

CREATE TABLE IF NOT EXISTS `landen` (
  `land_id` int(10) unsigned NOT NULL,
  `landcode` char(2) NOT NULL,
  `land` varchar(48) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=250 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `landen`
--

INSERT INTO `landen` (`land_id`, `landcode`, `land`) VALUES
(1, 'AF', 'Afghanistan'),
(2, 'AX', '&Aring;land'),
(3, 'AL', 'Albani&euml;'),
(4, 'DZ', 'Algerije'),
(5, 'VI', 'Amerikaanse Maagdeneilanden'),
(6, 'AS', 'Amerikaans-Samoa'),
(7, 'AD', 'Andorra'),
(8, 'AO', 'Angola'),
(9, 'AI', 'Anguilla'),
(10, 'AQ', 'Antarctica'),
(11, 'AG', 'Antigua en Barbuda'),
(12, 'AR', 'Argentini&euml;'),
(13, 'AM', 'Armeni&euml;'),
(14, 'AW', 'Aruba'),
(15, 'AU', 'Australi&euml;'),
(16, 'AZ', 'Azerbeidzjan'),
(17, 'BS', 'Bahama''s'),
(18, 'BH', 'Bahrein'),
(19, 'BD', 'Bangladesh'),
(20, 'BB', 'Barbados'),
(21, 'BE', 'Belgi&euml;'),
(22, 'BZ', 'Belize'),
(23, 'BJ', 'Benin'),
(24, 'BM', 'Bermuda'),
(25, 'BT', 'Bhutan'),
(26, 'BO', 'Bolivia'),
(27, 'BQ', 'Bonaire, Sint Eustatius en Saba'),
(28, 'BA', 'Bosni&euml; en Herzegovina'),
(29, 'BW', 'Botswana'),
(30, 'BV', 'Bouveteiland'),
(31, 'BR', 'Brazili&euml;'),
(32, 'VG', 'Britse Maagdeneilanden'),
(33, 'IO', 'Brits Indische Oceaanterritorium'),
(34, 'BN', 'Brunei'),
(35, 'BG', 'Bulgarije'),
(36, 'BF', 'Burkina Faso'),
(37, 'BI', 'Burundi'),
(38, 'KH', 'Cambodja'),
(39, 'CA', 'Canada'),
(40, 'CF', 'Centraal-Afrikaanse Republiek'),
(41, 'CL', 'Chili'),
(42, 'CN', 'China'),
(43, 'CX', 'Christmaseiland'),
(44, 'CC', 'Cocoseilanden'),
(45, 'CO', 'Colombia'),
(46, 'KM', 'Comoren'),
(47, 'CG', 'Congo-Brazzaville'),
(48, 'CD', 'Congo-Kinshasa'),
(49, 'CK', 'Cookeilanden'),
(50, 'CR', 'Costa Rica'),
(51, 'CU', 'Cuba'),
(52, 'CW', 'Cura&ccedil;ao'),
(53, 'CY', 'Cyprus'),
(54, 'DK', 'Denemarken'),
(55, 'DJ', 'Djibouti'),
(56, 'DM', 'Dominica'),
(57, 'DO', 'Dominicaanse Republiek'),
(58, 'DE', 'Duitsland'),
(59, 'EC', 'Ecuador'),
(60, 'EG', 'Egypte'),
(61, 'SV', 'El Salvador'),
(62, 'GQ', 'Equatoriaal-Guinea'),
(63, 'ER', 'Eritrea'),
(64, 'EE', 'Estland'),
(65, 'ET', 'Ethiopi&euml;'),
(66, 'FO', 'Faer&ouml;er'),
(67, 'FK', 'Falklandeilanden'),
(68, 'FJ', 'Fiji'),
(69, 'PH', 'Filipijnen'),
(70, 'FI', 'Finland'),
(71, 'FR', 'Frankrijk'),
(72, 'TF', 'Franse Zuidelijke en Antarctische Gebieden'),
(73, 'GF', 'Frans-Guyana'),
(74, 'PF', 'Frans-Polynesi&euml;'),
(75, 'GA', 'Gabon'),
(76, 'GM', 'Gambia'),
(77, 'GE', 'Georgi&euml;'),
(78, 'GH', 'Ghana'),
(79, 'GI', 'Gibraltar'),
(80, 'GD', 'Grenada'),
(81, 'GR', 'Griekenland'),
(82, 'GL', 'Groenland'),
(83, 'GP', 'Guadeloupe'),
(84, 'GU', 'Guam'),
(85, 'GT', 'Guatemala'),
(86, 'GG', 'Guernsey'),
(87, 'GN', 'Guinee'),
(88, 'GW', 'Guinee-Bissau'),
(89, 'GY', 'Guyana'),
(90, 'HT', 'Ha&iuml;ti'),
(91, 'HM', 'Heard en McDonaldeilanden'),
(92, 'HN', 'Honduras'),
(93, 'HU', 'Hongarije'),
(94, 'HK', 'Hongkong'),
(95, 'IE', 'Ierland'),
(96, 'IS', 'IJsland'),
(97, 'IN', 'India'),
(98, 'ID', 'Indonesi&euml;'),
(99, 'IQ', 'Irak'),
(100, 'IR', 'Iran'),
(101, 'IL', 'Isra&euml;l'),
(102, 'IT', 'Itali&euml;'),
(103, 'CI', 'Ivoorkust'),
(104, 'JM', 'Jamaica'),
(105, 'JP', 'Japan'),
(106, 'YE', 'Jemen'),
(107, 'JE', 'Jersey'),
(108, 'JO', 'Jordani&euml;'),
(109, 'KY', 'Kaaimaneilanden'),
(110, 'CV', 'Kaapverdi&euml;'),
(111, 'CM', 'Kameroen'),
(112, 'KZ', 'Kazachstan'),
(113, 'KE', 'Kenia'),
(114, 'KG', 'Kirgizi&euml;'),
(115, 'KI', 'Kiribati'),
(116, 'UM', 'Kleine Pacifische eilanden van de V.S.'),
(117, 'KW', 'Koeweit'),
(118, 'HR', 'Kroati&euml;'),
(119, 'LA', 'Laos'),
(120, 'LS', 'Lesotho'),
(121, 'LV', 'Letland'),
(122, 'LB', 'Libanon'),
(123, 'LR', 'Liberia'),
(124, 'LY', 'Libi&euml;'),
(125, 'LI', 'Liechtenstein'),
(126, 'LT', 'Litouwen'),
(127, 'LU', 'Luxemburg'),
(128, 'MO', 'Macau'),
(129, 'MK', 'Macedoni&euml;'),
(130, 'MG', 'Madagaskar'),
(131, 'MW', 'Malawi'),
(132, 'MV', 'Maldiven'),
(133, 'MY', 'Maleisi&euml;'),
(134, 'ML', 'Mali'),
(135, 'MT', 'Malta'),
(136, 'IM', 'Man'),
(137, 'MA', 'Marokko'),
(138, 'MH', 'Marshalleilanden'),
(139, 'MQ', 'Martinique'),
(140, 'MR', 'Mauritani&euml;'),
(141, 'MU', 'Mauritius'),
(142, 'YT', 'Mayotte'),
(143, 'MX', 'Mexico'),
(144, 'FM', 'Micronesia'),
(145, 'MD', 'Moldavi&euml;'),
(146, 'MC', 'Monaco'),
(147, 'MN', 'Mongoli&euml;'),
(148, 'ME', 'Montenegro'),
(149, 'MS', 'Montserrat'),
(150, 'MZ', 'Mozambique'),
(151, 'MM', 'Myanmar'),
(152, 'NA', 'Namibi&euml;'),
(153, 'NR', 'Nauru'),
(154, 'NL', 'Nederland'),
(155, 'NP', 'Nepal'),
(156, 'NI', 'Nicaragua'),
(157, 'NC', 'Nieuw-Caledoni&euml;'),
(158, 'NZ', 'Nieuw-Zeeland'),
(159, 'NE', 'Niger'),
(160, 'NG', 'Nigeria'),
(161, 'NU', 'Niue'),
(162, 'MP', 'Noordelijke Marianen'),
(163, 'KP', 'Noord-Korea'),
(164, 'NO', 'Noorwegen'),
(165, 'NF', 'Norfolk'),
(166, 'UG', 'Oeganda'),
(167, 'UA', 'Oekra&iuml;ne'),
(168, 'UZ', 'Oezbekistan'),
(169, 'OM', 'Oman'),
(170, 'AT', 'Oostenrijk'),
(171, 'TL', 'Oost-Timor'),
(172, 'PK', 'Pakistan'),
(173, 'PW', 'Palau'),
(174, 'PS', 'Palestina'),
(175, 'PA', 'Panama'),
(176, 'PG', 'Papoea-Nieuw-Guinea'),
(177, 'PY', 'Paraguay'),
(178, 'PE', 'Peru'),
(179, 'PN', 'Pitcairneilanden'),
(180, 'PL', 'Polen'),
(181, 'PT', 'Portugal'),
(182, 'PR', 'Puerto Rico'),
(183, 'QA', 'Qatar'),
(184, 'RE', 'R&eacute;union'),
(185, 'RO', 'Roemeni&euml;'),
(186, 'RU', 'Rusland'),
(187, 'RW', 'Rwanda'),
(188, 'BL', 'Saint-Barth&eacute;lemy'),
(189, 'KN', 'Saint Kitts en Nevis'),
(190, 'LC', 'Saint Lucia'),
(191, 'PM', 'Saint-Pierre en Miquelon'),
(192, 'VC', 'Saint Vincent en de Grenadines'),
(193, 'SB', 'Salomonseilanden'),
(194, 'WS', 'Samoa'),
(195, 'SM', 'San Marino'),
(196, 'SA', 'Saoedi-Arabi&euml;'),
(197, 'ST', 'Sao Tom&eacute; en Principe'),
(198, 'SN', 'Senegal'),
(199, 'RS', 'Servi&euml;'),
(200, 'SC', 'Seychellen'),
(201, 'SL', 'Sierra Leone'),
(202, 'SG', 'Singapore'),
(203, 'SH', 'Sint-Helena, Ascension en Tristan da Cunha'),
(204, 'MF', 'Sint-Maarten'),
(205, 'SX', 'Sint Maarten'),
(206, 'SI', 'Sloveni&euml;'),
(207, 'SK', 'Slowakije'),
(208, 'SD', 'Soedan'),
(209, 'SO', 'Somali&euml;'),
(210, 'ES', 'Spanje'),
(211, 'SJ', 'Spitsbergen en Jan Mayen'),
(212, 'LK', 'Sri Lanka'),
(213, 'SR', 'Suriname'),
(214, 'SZ', 'Swaziland'),
(215, 'SY', 'Syri&euml;'),
(216, 'TJ', 'Tadzjikistan'),
(217, 'TW', 'Taiwan'),
(218, 'TZ', 'Tanzania'),
(219, 'TH', 'Thailand'),
(220, 'TG', 'Togo'),
(221, 'TK', 'Tokelau'),
(222, 'TO', 'Tonga'),
(223, 'TT', 'Trinidad en Tobago'),
(224, 'TD', 'Tsjaad'),
(225, 'CZ', 'Tsjechi&euml;'),
(226, 'TN', 'Tunesi&euml;'),
(227, 'TR', 'Turkije'),
(228, 'TM', 'Turkmenistan'),
(229, 'TC', 'Turks- en Caicoseilanden'),
(230, 'TV', 'Tuvalu'),
(231, 'UY', 'Uruguay'),
(232, 'VU', 'Vanuatu'),
(233, 'VA', 'Vaticaanstad'),
(234, 'VE', 'Venezuela'),
(235, 'AE', 'Verenigde Arabische Emiraten'),
(236, 'US', 'Verenigde Staten'),
(237, 'GB', 'Verenigd Koninkrijk'),
(238, 'VN', 'Vietnam'),
(239, 'WF', 'Wallis en Futuna'),
(240, 'EH', 'Westelijke Sahara'),
(241, 'BY', 'Wit-Rusland'),
(242, 'ZM', 'Zambia'),
(243, 'ZW', 'Zimbabwe'),
(244, 'ZA', 'Zuid-Afrika'),
(245, 'GS', 'Zuid-Georgia en de Zuidelijke Sandwicheilanden'),
(246, 'KR', 'Zuid-Korea'),
(247, 'SS', 'Zuid-Soedan'),
(248, 'SE', 'Zweden'),
(249, 'CH', 'Zwitserland');

-- --------------------------------------------------------

--
-- Table structure for table `linken`
--

CREATE TABLE IF NOT EXISTS `linken` (
  `link_id` int(10) unsigned NOT NULL COMMENT 'pk',
  `link` varchar(128) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `linken`
--

INSERT INTO `linken` (`link_id`, `link`) VALUES
(1, 'https://nl.wikipedia.org/wiki/Azuriet'),
(2, 'https://nl.wikipedia.org/wiki/Galeniet'),
(3, 'https://nl.wikipedia.org/wiki/Zinkblende'),
(4, 'https://nl.wikipedia.org/wiki/Chalcopyriet'),
(5, 'https://en.wikipedia.org/wiki/Pyrrhotite'),
(6, 'https://nl.wikipedia.org/wiki/Pyriet'),
(7, 'https://nl.wikipedia.org/wiki/Molybdeniet'),
(8, 'https://nl.wikipedia.org/wiki/Magnetiet'),
(9, 'https://nl.wikipedia.org/wiki/Hematiet'),
(10, 'https://nl.wikipedia.org/wiki/Goethiet');

-- --------------------------------------------------------

--
-- Table structure for table `locaties`
--

CREATE TABLE IF NOT EXISTS `locaties` (
  `locatie_id` int(10) unsigned NOT NULL COMMENT 'pk',
  `breedte` varchar(12) NOT NULL,
  `lengte` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mineralen`
--

CREATE TABLE IF NOT EXISTS `mineralen` (
  `mineraal_id` int(10) unsigned NOT NULL COMMENT 'pk',
  `mineraal` varchar(32) NOT NULL,
  `formule` varchar(64) DEFAULT NULL,
  `systeem` enum('kubisch','tetragonaal','orthorombisch','hexagonaal','monoklien','trigonaal','amorf') DEFAULT NULL,
  `groep` varchar(24) NOT NULL,
  `hardheid` varchar(10) DEFAULT NULL,
  `kleur` varchar(64) DEFAULT NULL,
  `imgurl` varchar(64) DEFAULT NULL,
  `img_info_id` int(10) unsigned DEFAULT NULL COMMENT 'pk',
  `info_id` int(11) unsigned DEFAULT NULL,
  `link_id` int(11) unsigned DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mineralen`
--

INSERT INTO `mineralen` (`mineraal_id`, `mineraal`, `formule`, `systeem`, `groep`, `hardheid`, `kleur`, `imgurl`, `img_info_id`, `info_id`, `link_id`) VALUES
(1, 'Galaniet', 'PbS', 'kubisch', 'sulfiden', '2.5-2.7', 'grijs', 'galena.jpg', 51, 2, 2),
(2, 'Sfaleriet', '(Zn,Fe)S', 'kubisch', 'sulfiden', '3.5-4', 'bruin, zwart, grijs, geel, rood, kleurloos', 'sphalerite.jpg', 50, 1, 3),
(3, 'Chalcopyriet', 'CuFeS<sub>2</sub>', 'tetragonaal', 'sulfiden', '3.5-4.5', 'geel, brons', 'chalcopyrite.jpg', 52, 3, 4),
(4, 'Pyrrhotiet', 'Fe<sub>1-x</sub> (x=0-0.2)', 'hexagonaal', 'sulfiden', '3.5-4.5', 'geel, brons, bruin, rood', 'pyrrhotite.jpg', 53, 4, 5),
(5, 'Pyriet', 'FeS<sub>2</sub>', 'kubisch', 'sulfiden', '6-6.5', 'geel, koperachtig', 'pyrite.jpg', 54, 5, 6),
(6, 'Molybdeniet', 'MoS<sub>2</sub>', 'hexagonaal', 'sulfiden', '1-1.5', 'grijs, blauw, geel, bruin, rood', 'molybdenite.jpg', 55, 6, 7),
(7, 'Magnetiet', 'Fe<sup>2+</sup>Fe<sup>3+</sup>O<sub>4</sub>', 'kubisch', 'oxyden', '5.5-6', 'zwart, metaalglans, opaak', 'magnetite.jpg', 56, 7, 8),
(8, 'Hematiet', 'Fe<sup>2+</sup>Fe<sup>3+</sup>O<sub>4</sub>', 'trigonaal', 'oxyden', '5-6', 'zwart, donkergrijs, metaalglans, opaak', 'hematite.jpg', 57, 8, 9),
(9, 'Goethiet', 'Fe<sup>3+</sup>(OH)', 'orthorombisch', 'oxyden', '5-5.5', 'roestbruin, veelal mat.', 'goethite.jpg', 49, 9, 10),
(10, 'Haliet', 'NaCl', 'kubisch', 'halogeniden', '2.5', 'kleurloos, wit', 'halite.jpg', 58, 10, 0),
(11, 'Fluoriet', 'CaF<sub>2</sub>', 'kubisch', 'halogeniden', '3.5-4', 'o.a. lichtgroen, blauwgroen, violet', 'fluorite.jpg', 59, 11, 0),
(12, 'Calciet', 'BaSo<sub>4</sub>', 'hexagonaal', 'carbonaten', 'NaN-3', 'kleurloos, wit, rose, groen,geel', 'calcite.jpg', 60, 12, 0),
(19, 'Azuriet', 'Cu<sub>3</sub>(CO)<sub>3</sub>)<sub>2</sub>(OH)<sub>2</sub>', 'monoklien', 'karbonaten', '5-5.1', 'blauw (licht tot heel donker), zwart', 'azurite.jpg', 48, 15, 1),
(20, 'Dolomiet', 'CaMg(CO<sub>3</sub>)<sub>2</sub>', 'hexagonaal', 'carbonaten', '3.5-4', 'rose, kleurloos, wit, grijs, groen, zwart', 'dolomite.jpg', 61, 29, 0),
(22, 'Argoniet', 'CaCO<sub>3</sub>', 'orthorombisch', 'carbonaten', '3.5-4', 'kleurloos of wit', 'aragonite.jpg', 62, 30, 0),
(23, 'Malachiet', 'CaCO<sub>3</sub>', 'monoklien', 'carbonaten', '3.5-4', 'groen', 'malachite.jpg', 63, 31, 0),
(24, 'Bariet', 'BaSO<sub>4</sub>', 'orthorombisch', 'sulfaten', '2.5-3.5', 'wit, geel, licht grijs', 'barite.jpg', 63, 32, 0),
(25, 'Celestien', 'SoSO4', 'orthorombisch', 'sulfaten', '3-3.5', 'kleurloos, wit tot geel', 'celestine.jpg', 65, 33, 0),
(26, 'Anhydriet', 'CaSo<sub>4</sub>', 'orthorombisch', 'sulfaten', '3-3.5', 'wit, kleurloos, grijs, blauw, paars', 'anhydrite.jpg', 66, 34, 0),
(27, 'Gips', 'CaSO<sub>4</sub><sup>*</sup>2H<sub>2</sub>O', 'monoklien', 'sulfaten', '2', 'kleurloos, wit', 'gypsum.jpg', 67, 35, 0),
(28, 'Wolframiet', '(Fe,Mn)Wo<sub>4</sub>', 'monoklien', 'sulfaten', '1-10', 'zwart, bruin', 'wolframite.jpg', 68, 36, 0),
(29, 'Kwarts', 'SiO<sub>2</sub>', 'trigonaal', 'silicaten', '7', 'kleurloos tot wit', 'quartz.jpg', 69, 37, 0),
(30, 'Opaal', 'SiO<sub>2</sub><sup>*</sup>NH<sub>2</sub>O', 'amorf', 'silicaten', '5.5-6.5', 'kleurloos, wit of grijs, bruine, groene, rode of blauwe nuances', 'opal.jpg', 70, 38, 0),
(31, 'Kyaniet', 'Al<sub>2</sub>SiO<sub>5</sub>', 'trigonaal', 'silicaten', '4-7', 'blauwig, wittig, grijs of groenig', 'kyanite.jpg', 71, 39, 0),
(32, 'Biotiet', 'K(Mg,Fe)AlSiO<sub>3</sub>O<sub>10</sub>(OH)<sub>2</sub>', 'monoklien', 'silicaten', '2-3', 'bruin, zwart, groen, wit', 'biotite.jpg', 72, 40, 0),
(33, 'Goud', 'Au', 'kubisch', 'elementen', '2.5-3', 'goud, geel', 'gold.jpg', 73, 42, 0),
(34, 'Zilver', 'Ag', 'kubisch', 'elementen', '2.5-3', 'zilver, wit, verkleurend naar grijs, zwart', 'silver.jpg', 74, 43, 0),
(35, 'Koper', 'Cu', 'kubisch', 'elementen', '2.5-3', 'rose, verrkleurend naar rood koper en bruin', 'copper.jpg', 75, 44, 0),
(36, 'Grafiet', 'C', 'hexagonaal', 'elementen', '1', 'zwart, grijs', 'graphite.jpg', 76, 45, 0),
(37, 'Zwavel', 'S', 'orthorombisch', 'elementen', '1.5-2.5', 'geel, bruin, groen, rood', 'sulfur.jpg', 77, 46, 0),
(38, 'Diamant', 'C', 'kubisch', 'elementen', '10', 'kleurloos, wit, blauw, geel', 'diamond.jpg', 78, 47, 0);

-- --------------------------------------------------------

--
-- Table structure for table `zanden`
--

CREATE TABLE IF NOT EXISTS `zanden` (
  `zand_id` int(10) unsigned NOT NULL COMMENT 'pk',
  `naam` varchar(32) NOT NULL,
  `type` enum('strand','rivier','vulkaan','groeve','anders') NOT NULL,
  `land` varchar(32) NOT NULL COMMENT 'pk',
  `vindplaats` varchar(128) NOT NULL,
  `diepte` int(11) NOT NULL DEFAULT '0',
  `code` varchar(8) DEFAULT NULL,
  `info_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT 'fk',
  `link_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT 'fk',
  `imgurl` varchar(32) DEFAULT NULL,
  `datum` date DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `zanden`
--

INSERT INTO `zanden` (`zand_id`, `naam`, `type`, `land`, `vindplaats`, `diepte`, `code`, `info_id`, `link_id`, `imgurl`, `datum`) VALUES
(1, 'Solfatara zand', 'vulkaan', 'Griekenland', 'Pozzuoli, Solfatara krater', 0, '', 0, 0, 'it_pozzuoli_solfatara_01.png', '2012-04-09'),
(2, 'Kreta - Elafonissi zand', 'strand', 'Griekenland', 'Elafonissi', 0, '', 0, 0, 'zand_kreta_elafonissi_01.png', '2017-08-31'),
(3, 'Kreta- Falassarna zand', 'strand', 'Griekenland', 'Falassarna', 0, '', 0, 0, 'zand_kreta_falasarna_01.png', '2017-09-01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `info`
--
ALTER TABLE `info`
  ADD PRIMARY KEY (`info_id`);

--
-- Indexes for table `landen`
--
ALTER TABLE `landen`
  ADD PRIMARY KEY (`land_id`);

--
-- Indexes for table `linken`
--
ALTER TABLE `linken`
  ADD PRIMARY KEY (`link_id`);

--
-- Indexes for table `locaties`
--
ALTER TABLE `locaties`
  ADD PRIMARY KEY (`locatie_id`);

--
-- Indexes for table `mineralen`
--
ALTER TABLE `mineralen`
  ADD PRIMARY KEY (`mineraal_id`);

--
-- Indexes for table `zanden`
--
ALTER TABLE `zanden`
  ADD PRIMARY KEY (`zand_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `info`
--
ALTER TABLE `info`
  MODIFY `info_id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'pk',AUTO_INCREMENT=79;
--
-- AUTO_INCREMENT for table `landen`
--
ALTER TABLE `landen`
  MODIFY `land_id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=250;
--
-- AUTO_INCREMENT for table `linken`
--
ALTER TABLE `linken`
  MODIFY `link_id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'pk',AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `locaties`
--
ALTER TABLE `locaties`
  MODIFY `locatie_id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'pk';
--
-- AUTO_INCREMENT for table `mineralen`
--
ALTER TABLE `mineralen`
  MODIFY `mineraal_id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'pk',AUTO_INCREMENT=39;
--
-- AUTO_INCREMENT for table `zanden`
--
ALTER TABLE `zanden`
  MODIFY `zand_id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'pk',AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
