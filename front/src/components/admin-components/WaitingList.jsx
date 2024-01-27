
import React, {useState} from "react";
import {Table} from "./Table";
import {Link} from "react-router-dom";
import {Modal} from "./Modal";
import {TableWaitingList} from "./TableWaitingList";

function WaitingList() {
  const [rows, setRows] = useState(
    [
      {
        "id": 1,
        "page": "kamel missoum",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 2,
        "page": "mekki mekki",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 3,
        "page": "mohamed dif",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 4,
        "page": "avocatalgerien avocatalgerien",
        "description": "S.A.C.ISociété d’Avocats et Consultation InternationalPrestation de serviceNotre étude propose ses services dans toute L’Algérie à une clientèle nationale et internationale, des clients privés, des entreprises et des communautés.Nos services consistent en l’assistance-conseil juridique, la représentation en justice et auprès des autorités publiques dans des affaires de droit civil, administratif et pénal, l’élaboration d’expertises et la rédaction de contrats. Nous participons activement à des organes de décision d’entreprises et d’organisations diverses et à des tribunaux arbitraux.Nous travaillons notamment dans les domaines du droit commercial (droit des sociétés et droits incorporels), droit des contrats, droit civil, droit de la construction, de l’aménagement du territoire et de l’expropriation ainsi que droit bancaire. Les feuilles de présentation montrent les domaines de prédilection des différents avocats. Lorsque des questions spécifiques ou les conditions géographiques l’exigent, nous faisons appel à notre réseau national et international de spécialistes qualifiés, avec lesquels nous coopérons de longue date",
        "status": "accepted"
      },
      {
        "id": 5,
        "page": "braneci redhouane",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 6,
        "page": "ali harkati",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 7,
        "page": "Nacer Hadj",
        "description": "Cabinet d’avocat spécialisé dans le droit douanier , le droit pénal , , droit du travail , droit commercial , droit de la consommation , spécialiste en matière de propriété intellectuelle . Mandataire auprès de l’INAPI ( Institut National Algérien de Propriété Industrielle ) . Membre de la Chambre de Commerce Internationale (Algérie).",
        "status": "accepted"
      },
      {
        "id": 8,
        "page": "abdelkader zeghba",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 9,
        "page": "nabil rebibane",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 10,
        "page": "sana allali",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 11,
        "page": "nacim haouam",
        "description": "Cabinet d’avocat de 04 avocats rassemblés un avocat agrée prés la cour suprême et le conseil d’état et trois près la cour. spécialisé dans le domaine des sociétés pétrolières et le droit pénal",
        "status": "accepted"
      },
      {
        "id": 12,
        "page": "badreddine cheribet",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 13,
        "page": "karim kadri",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 14,
        "page": "bouchakourmustapha bouchakourmustapha",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 15,
        "page": "abdellwahab abdellwahab",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 16,
        "page": "sakhri nabila",
        "description": "Le Cabinet Maitre SAKHRI est à votre disposition pour vous representer devant plusieurs juridictions sur tout le territoire algerien.",
        "status": "accepted"
      },
      {
        "id": 17,
        "page": "avocatbennai avocatbennai",
        "description": "Maître BENNAI Ilies Abderrahim a fondé son cabinet d’Avocat à Ghazaouet ( Tlemcen ) et exerce à titre individuel pour mieux répondre aux besoins de nos clients.",
        "status": "accepted"
      },
      {
        "id": 18,
        "page": "abderrazak houmri",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 19,
        "page": "nasereddine mokadem",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 20,
        "page": "kamel ibrahim",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 21,
        "page": "metidji metidji",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 22,
        "page": "touahir lynda",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 23,
        "page": "kheira nadia",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 24,
        "page": "zakaria fettar",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 25,
        "page": "saighi abdelhafid",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 26,
        "page": "ghoul hamza",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 27,
        "page": "abdelaziz teyar",
        "description": "avocat agrée a la cour suprême et conseil de l'état",
        "status": "accepted"
      },
      {
        "id": 28,
        "page": "benyahia abdesselem",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 29,
        "page": "avocatdz avocatdz",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 30,
        "page": "dim medjahri",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 31,
        "page": "karim laibi",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 32,
        "page": "mourad abdi",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 33,
        "page": "mechri abdessalam",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 34,
        "page": "mustapha derkaoui",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 35,
        "page": "delileche karim",
        "description": "Cabinet D’avocat",
        "status": "accepted"
      },
      {
        "id": 36,
        "page": "abderrahmane sellam",
        "description": "maitre et docteur en droit",
        "status": "accepted"
      },
      {
        "id": 37,
        "page": "ahcene abdi",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 38,
        "page": "issam chenafi",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 39,
        "page": "tahar.djermoun tahar.djermoun",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 40,
        "page": "lachemi lachemi",
        "description": "",
        "status": "accepted"
      },
      {
        "id": 41,
        "page": "avocat sekkal cabnet",
        "description": "Cabinet d’avocats algériens à Rome – ITALIE spécialisé en droit des Entreprises, contrats de marché, crédits, ..ect",
        "status": "accepted"
      },
      {
        "id": 42,
        "page": "amine boucekka",
        "description": "Notre étude propose ses services dans toute L’Algérie à une clientèle nationale et internationale, des clients privés, des entreprises et des communautés.Nos services consistent en l’assistance-conseil juridique, la représentation en justice et auprès des autorités publiques dans des affaires de droit civil, administratif et pénal, l’élaboration d’expertises et la rédaction de contrats. Nous participons activement à des organes de décision d’entreprises et d’organisations diverses et à des tribunaux arbitraux.Nous travaillons notamment dans les domaines du droit commercial (droit des sociétés et droits incorporels), droit des contrats, droit civil, droit de la construction, de l’aménagement du territoire et de l’expropriation ainsi que droit bancaire. Les feuilles de présentation montrent les domaines de prédilection des différents avocats. Lorsque des questions spécifiques ou les conditions géographiques l’exigent, nous faisons appel à notre réseau national et international de spécialistes qualifiés, avec lesquels nous coopérons de longue date",
        "status": "accepted"
      },

        {
          "id": 43,
          "page": "boudjemaa hama",
          "description": "Monsieur, Madame J’ai l’honneur de proposer mes services auprès de vous que vous soyez particulier entreprise privé ou étatique. Avocat à la Cour Mon Cabinet vous offre une large gamme de services juridiques, également dans les matières controversées et complexes...",
          "status": "accepted"
        },
        {
          "id": 44,
          "page": "abdeldjalil.belkhodja abdeldjalil.belkhodja",
          "description": "Notre cabinet intervient en tant que conseil et lors de procédures judiciaires devant la plupart des juridictions Algériennes. Notre cabinet remplit essentiellement trois grandes fonctions auprès de ses clients : une fonction d’information et de conseil...",
          "status": "accepted"
        },
        {
          "id": 45,
          "page": "bekhechi bekhechi",
          "description": "La réussite est notre deviseSatisfaire nos clients est notre priorité",
          "status": "accepted"
        },
        {
          "id": 46,
          "page": "slimani mohammed",
          "description": "",
          "status": "accepted"
        },
        {
          "id": 47,
          "page": "mohamed brahimi",
          "description": "Maître Mohamed BRAHIMI, Avocat à la Cour de Bouira.Agréé à la Cour suprême et au Conseil d’Etat.Maître BRAHIMI Mohammed est issu de l’Ecole Nationale d’Administration, section judiciaire, promotion 1980.Membre du barreau depuis 1992...",
          "status": "accepted"
        },
        {
          "id": 48,
          "page": "chaouki taleb",
          "description": "Avocat agréé à la cour suprême et conseil d’etat",
          "status": "accepted"
        },
        {
          "id": 49,
          "page": "djeddi djeddi",
          "description": "",
          "status": "accepted"
        },
        {
          "id": 50,
          "page": ".bouanani .bouanani",
          "description": "",
          "status": "accepted"
        },
        {
          "id": 51,
          "page": "lawyer_azri lawyer_azri",
          "description": "L’enracinement local, le positionnement unique et l’expertise reconnue permettent au cabinet AZRI AVOCATS de fournir des solutions innovantes et à haute valeur ajoutée en droit fiscal, en droit des affaires...",
          "status": "accepted"
        },
        {
          "id": 52,
          "page": "yasmina selal",
          "description": "Appelez le ; 0554 .08. 19. 00Avocate à la cour (Alger,bouira,blida,boumerdas,bejaia,media,mesila,tizi ouzou,bordj boraridj)",
          "status": "accepted"
        },
        {
          "id": 53,
          "page": "djamel laagabi",
          "description": "",
          "status": "accepted"
        },

          {
            "id": 53,
            "page": "ghazaouet tlemcen",
            "description": "Le cabinet de Maitre RAHMOUNI SIDI MOHAMMED a été fondé en 2011 après quatre années de sciences Juridiques et Administratives et une anneè de certificat d’aptitude à la profession d’avocat plus un stage.son activité est celle d’un avocat généraliste ainsi le cabinet de Maître RAHMOUNI intervient dans de nombreux domaines du droit .Le Cabinet de Maître RAHMOUNI est une structure à taille humaine, conservant ainsi une qualité d’écoute,d’accessibilité et de réactivité dans le respect de la déontologie de la profession d’avocat. Le Cabinet vous représente avec honneur et probité dans la défense de vos intérêts, en vous conseillant les stratégies les plus adaptées tout en adoptant une politique de transparence et de modération en matière d’honoraires.",
            "status": "accepted"
          },
          {
            "id": 54,
            "page": "mourad benyettou",
            "description": "Notre Cabinet traite tous types de contentieux devant toutes les instances judiciaires algeriènnes.Nous collaborons aussi avec un cabinet français implanté à paris, en particulier en matière de nationalité française et droits des étrangers.En plus de nos activités judiciaires, notre cabinet est disposé également à défendre vos intérêts lors de l’élaboration des accords, conventions, contrats et toutes négociations avec vos partenaires sociaux, fiscaux, parafiscaux, par a une meilleure interprétation des lois en vigueur et nos judicieuses orientations.",
            "status": "accepted"
          },
          {
            "id": 55,
            "page": "nadia zouani",
            "description": "Notre cabinet offre des services de conseils juridiques en matière de propriété intellectuelle, notamment des marques, de brevet d’invention et de dessins ou modèles ainsi du droit d’auteur et appellation d’origine, droits d’auteur et les droits voisins. Notre mandataire agréé est habilité à déposer des marques et tout autre signe distinctif à l’Institut National Algérien de la Propriété Industrielle (INAPI).Plusieurs sociétés étrangères et algériennes nous ont déjà fait confiance. Nos atouts sont la rapidité, la disponibilité et le meilleur prix!Déposez votre marque en Algérie est un droit, mais aussi une obligation, selon l’ordonnance 03-06 relative aux marques ! Alors pensez, sérieusement, à déposer vos marques, avant de commercialiser vos produits ou services en Algérie, car vous risquez le piratage et la contre façon.Notre cabinet ; agréé par le ministère de l’industrie et des mines en qualité de mandataire en propriété industrielle auprès de l’institut national de la propriété industrielle ; grâce à ses avocats et son réseau national des collaborateurs partout en Algérie, offre des services de qualité devant tous les tribunaux algériens, comme des actions en concurrence déloyale ou en contrefaçon.",
            "status": "accepted"
          },
          {
            "id": 56,
            "page": "ramzi adnane sakhri",
            "description": "",
            "status": "accepted"
          },
          {
            "id": 57,
            "page": "avocatalgérien",
            "description": "",
            "status": "accepted"
          },
          {
            "id": 58,
            "page": "avocatalgérien",
            "description": "",
            "status": "accepted"
          },
          {
            "id": 59,
            "page": "avocatalgérien",
            "description": "",
            "status": "accepted"
          },
          {
            "id": 60,
            "page": "abdelkader zouaid",
            "description": "Le Cabinet Zouaid, est un Cabinet d’Avocats situé à Bouira (100 kms d’Alger).La compétence territoriale de l’avocat en Algérie étant totale. Le Cabinet intervient dans plusieurs wilayas principalement à:le Cabinet, en effet, se charge du suivi des affaires de ses clients dans toutes les phases du litige (consultations et conseils, rédaction d’actes et plaidoiries devant les juridictions).Il intervient dans plusieurs domaines du droit (droit civil, droit commercial, droit des sociétés, droit social, droit de la famille, droit international privé, droit pénal et contentieux administratif).Le Cabinet travaille en outre en étroite collaboration avec des Etudes de Notaires, des Experts Comptables et des Experts fonciers, en Algérie, lorsque la situation exige de faire appel à ces professionnels.",
            "status": "accepted"
          },
          {
            "id": 61,
            "page": "mezouar mezouar",
            "description": "",
            "status": "accepted"
          },
          {
            "id": 62,
            "page": "abdelhafidh mohammed-sebaa maître",
            "description": "Maître Abdelhafidh MOHAMMED-SEBAA est avocat à la Cour. Inscrit à l’ordre des avocats de Mostaganem.A travers ses expériences pratiques et ses connaissances professionnelles, Maître Abdelhafidh MOHAMMED-SEBAA met à la disposition de ses clients, ses services en matière de conseil juridique et d’accompagnement dans le contentieux en garantissant la meilleure réactivité possible, et en s’engageant à défendre les intérêts de ses clients dans la durée.Au service des collectivités publiques, des entreprises et des particuliers, le Cabinet offre un centre de solutions et un panel de réponses pour intervenir à vos côtés dans un souci d’efficacité, de proximité, de terrain et de réactivité.C’est ainsi que le Cabinet est à votre disposition pour vous conseiller et vous accompagner dans le contentieux.Dynamisme, expérience et disponibilité; Maître Abdelhafidh MOHAMMED-SEBAA vous apporte le soutien d’un Cabinet pluridisciplinaire.",
            "status": "accepted"
          },

            {
              "id": 63,
              "page": "lilia guellour",
              "description": "Le Cabinet vous offre ses services juridiques, conseil et assistance qui répondent à vos besoins. Nous intervenons tant après des juridictions de droit commun, tribunaux d’instance, cour d’appel, tribunal administratif, affaire sociale, affaire commerciale, affaire pénale. En tenant compte des réglementations et de leurs évolutions constantes, nous vous aidons à construire les solutions adaptées à votre entreprise.",
              "status": "accepted"
            },
            {
              "id": 64,
              "page": "imad guettaf",
              "description": "",
              "status": "accepted"
            },
            {
              "id": 65,
              "page": "avocatalgérien",
              "description": "",
              "status": "accepted"
            },
            {
              "id": 66,
              "page": "nadia benahmed",
              "description": "",
              "status": "accepted"
            },
            {
              "id": 67,
              "page": "avocatalgérien",
              "description": "Founder and the managing partner of Benslimane A&C. Accredited lawyer with the supreme court and the administrative council. Accredited IP agent (with INAPI). Benslimane A&C (B A&C) is an Algerian leading law firm specialized in Business Law. Since 2007, BA&C is dedicated to working with clients to help them achieve their business goals and overcome legal challenges.",
              "status": "accepted"
            },
            {
              "id": 68,
              "page": "adel23mess",
              "description": "Avocat au barreau d’ANNABA depuis 2010, Maître MESSAOUDI ADEL vous assiste et vous accompagne durant toute la procédure judiciaire, du 1er rendez-vous jusqu’au prononcé. Disponible et à l’écoute, votre avocat cernera tous les aspects de votre dossier pour faire valoir au mieux vos droits et intérêts.",
              "status": "accepted"
            },
            {
              "id": 69,
              "page": "boudiaf boudiaf",
              "description": "CABINET D’AVOCATS/CONSEIL/CONTENTIEUX. Veuillez contacter Me Ahmed Reda BOUDIAF.",
              "status": "accepted"
            },
            {
              "id": 70,
              "page": "lyes lyes",
              "description": "",
              "status": "accepted"
            },
            {
              "id": 71,
              "page": "avocatalgérien",
              "description": "Contact: M. Samir SAYAH.",
              "status": "accepted"
            },
            {
              "id": 72,
              "page": "avocatalgérien",
              "description": "",
              "status": "accepted"
            },
            {
              "id": 73,
              "page": "said anani",
              "description": "",
              "status": "accepted"
            },

              {
                "id": 74,
                "page": "avocatalgerien",
                "description": "",
                "status": "accepted"
              },
              {
                "id": 75,
                "page": "mhidi ben",
                "description": "",
                "status": "accepted"
              },
              {
                "id": 76,
                "page": "benaired abdelghani",
                "description": "",
                "status": "accepted"
              },
              {
                "id": 77,
                "page": "avocatalgerien",
                "description": "",
                "status": "accepted"
              },
              {
                "id": 78,
                "page": "laouar walid",
                "description": "Practices: Family, marriage/divorce, insurance, banking, financial, commercial, business, foreign investment, marketing agreements, commercial, business, foreign investment, patents, Trademarks, copyrights , civil, criminal,  contracts, transportation, enterprises, aeronautical , maritime, foreign claims, estates, taxes, labor, social, immigration, auto- accidents.\nLanguages: Arabic, French, English.",
                "status": "accepted"
              },
              {
                "id": 79,
                "page": "avocatalgerien",
                "description": "",
                "status": "accepted"
              },
              {
                "id": 80,
                "page": "avocatalgerien",
                "description": "",
                "status": "accepted"
              },
              {
                "id": 81,
                "page": "avocatalgerien",
                "description": "",
                "status": "accepted"
              },
              {
                "id": 82,
                "page": "avocatalgerien",
                "description": "Contact: Me DARINE BIRADY\nEmail: secretariat.cabinetbirady@birady-attorney.com\nAdresse : 46 rue Bourbia Rabeh (Ex Chemin Luciani) – El Biar Alger\nIndications d’accès:\n1- Prendre le 1er Chemin à votre droite derrière la 1ère station d’essence du boulevard bagarra en face de Djenan el Mitak et du mini centre d’achat « Stop market » ;\n2- Longez ce chemin dit chemin Lunciani jusqu’au bout et prendre à votre droite\n3- Le cabinet se trouve à votre droite au no 46- à proximité de la Chambre de commerce Algéro allemande AHK.\nTel :+ 213 23.38.02.98\n+ 213 21.79.76.47\n+ 213 21.92.34.53\nFax :+213 21 92 34 53",
                "status": "accepted"
              },
              {
                "id": 83,
                "page": "bouchaib adnane",
                "description": "Avocat agrée à la cour suprême.",
                "status": "accepted"
              },
              {
                "id": 84,
                "page": "chalal karima",
                "description": "",
                "status": "accepted"
              },
              {
                "id": 85,
                "page": "avocatalgerien",
                "description": "",
                "status": "accepted"
              },
              {
                "id": 86,
                "page": "hafiz chems-eddine",
                "description": "",
                "status": "accepted"
              },

                {
                  "id": 87,
                  "page": "hafidi nasser",
                  "description": "",
                  "status": "accepted"
                },
                {
                  "id": 88,
                  "page": "hammoutene ali",
                  "description": "",
                  "status": "accepted"
                },
                {
                  "id": 89,
                  "page": "issadi nadir",
                  "description": "",
                  "status": "accepted"
                },
                {
                  "id": 90,
                  "page": "kebir yamina",
                  "description": "",
                  "status": "accepted"
                },
                {
                  "id": 91,
                  "page": "achour nesrine",
                  "description": "Avocat à la cour (Blida).Le cabinet d’avocat Achour s’occupe essentiellement d’affaires commerciales et foncières,d’une clientèles composée en grande partis d’entreprises.Fonctionnel depuis l’année 2006,sa gamme de service reste particulièrement diversifié,avec prés de 15 pratiques.Ses dernière s’adaptent facilement aux besoins et aux cas de chaque affaire en cours,mais elles se catégorisent en finances,banques,assurances,héritages,création d’entreprises,immobilier et bien d’autres encore.",
                  "status": "accepted"
                },
                {
                  "id": 92,
                  "page": "avocatalgerien noursaklaw",
                  "description": "d.jet@hotmail.com",
                  "status": "accepted"
                },
                {
                  "id": 93,
                  "page": "avocatalgerien samiaouali",
                  "description": "",
                  "status": "accepted"
                },
                {
                  "id": 94,
                  "page": "avocatalgerien hasNoEmail_b8f1067e-1484-4721-9197-c0c7a484db86",
                  "description": "",
                  "status": "accepted"
                },
                {
                  "id": 95,
                  "page": "avocatalgerien saadlyna",
                  "description": "",
                  "status": "accepted"
                },
                {
                  "id": 96,
                  "page": "avocatalgerien lawhouse",
                  "description": "",
                  "status": "accepted"
                },
                {
                  "id": 97,
                  "page": "meziane aliane",
                  "description": "",
                  "status": "accepted"
                },
                {
                  "id": 98,
                  "page": "avocatalgerien secretariat",
                  "description": "Goussanem & Aloui Law Firm was established in order to provide the business community, with high standars, reliable and efficient legal services, is a great and safe choice for business clients in need of counsel in Algeria. Since our firm’s founding in 1999, we have been giving legal advice, conducting negotiation and pleading case in observance of the essential values of our profession: independance, expertise and loyality. Our relations with clients are founded on availability, transparency, trust and the quest for excellence, with the emphasis on delivery of real-time legal solutions tailored to the requirements of the case.Legal AuditLegal UpdateDue DiligenceCorporate Secretarial ServiceDebt CollectionReal estateLobbying",
                  "status": "accepted"
                },
                {
                  "id": 99,
                  "page": "avocatalgerien lmessai",
                  "description": "",
                  "status": "accepted"
                },
                {
                  "id": 100,
                  "page": "ben abderrahmane dahmane",
                  "description": "",
                  "status": "accepted"
                },
                {
                  "id": 101,
                  "page": "avocatalgerien abdelkrimrighi",
                  "description": "",
                  "status": "accepted"
                },
                {
                  "id": 102,
                  "page": "avocatalgerien belaidmerabti",
                  "description": "",
                  "status": "accepted"
                },
                {
                  "id": 103,
                  "page": "kamal allag",
                  "description": "",
                  "status": "accepted"
                },
                {
                  "id": 104,
                  "page": "avocatalgerien hasNoEmail_5a9332cf-37c5-4931-9de7-3ec56bff3740",
                  "description": "",
                  "status": "accepted"
                },
                {
                  "id": 105,
                  "page": "avocatalgerien djamel.sator.ip",
                  "description": "djamel.sator.ip@live.fr",
                  "status": "accepted"
                },

                  {
                    "id": 106,
                    "page": "avocatalgerien jurisal",
                    "description": "nadlawyer@hotmail.com",
                    "status": "accepted"
                  },
                  {
                    "id": 107,
                    "page": "pierre marie martin",
                    "description": "",
                    "status": "accepted"
                  },
                  {
                    "id": 108,
                    "page": "avocatalgerien vlunel",
                    "description": "",
                    "status": "accepted"
                  },
                  {
                    "id": 109,
                    "page": "karim khoukhi",
                    "description": "",
                    "status": "accepted"
                  },
                  {
                    "id": 110,
                    "page": "avocatalgérien hasNoEmail_7c6c0d06-a9b6-4fa4-8400-b43070924329",
                    "description": "",
                    "status": "accepted"
                  },
                  {
                    "id": 111,
                    "page": "avocatalgerien info@kpmg.dz",
                    "description": "",
                    "status": "accepted"
                  },
                  {
                    "id": 112,
                    "page": "avocatalgerien laredj31",
                    "description": "Le cabinet de Maître Belabbes Laredj est situé sur la commune d’Es-Sénia dans la wilaya d’Oran.Maître Belabbes Laredj est un avocat inscrit à la cour d’Oran.Les domaines de compétencesDroit administratifDroit des assurancesDroit civil & familialDroit commercialDroit de l’immobilierDroit pénal",
                    "status": "accepted"
                  },
                  {
                    "id": 113,
                    "page": "aissani abdelkrim",
                    "description": "Le cabinet de Maître Aïssani Abdelkrim est situé dans le centre-ville d’Oran.Maître Aïssani Abdelkrim est un avocat inscrit au barreau d’Oran et agrée près de la Cour Suprême et du conseil d’Etat.",
                    "status": "accepted"
                  },
                  {
                    "id": 114,
                    "page": "avocatalgerien aemadani_avocat",
                    "description": "Le cabinet de Maître Madani Abou Bakr El Seddik est situé dans le centre-ville d’Oran.Maître Madani Abou Bakr El Seddik est un avocat inscrit au barreau d’Oran et agrée près de la Cour Suprême et du conseil d’Etat.",
                    "status": "accepted"
                  },
                  {
                    "id": 115,
                    "page": "avocatalgerien hasNoEmail_1e303641-4bea-4805-a5f1-a9716ebf9375",
                    "description": "Le cabinet de Maître Nedjadi Khadreddine est situé sur la commune de Aïn El Turk, dans la wilaya d’Oran.Maître Nedjadi Khadreddine est un avocat inscrit à la cour d’Oran.",
                    "status": "accepted"
                  },

                    {
                      "id": 116,
                      "page": "lahouari-ouahrani",
                      "description": "Le cabinet de Maître Ouahrani Lahouari est situé dans le centre-ville d’Oran. Maître Ouahrani Lahouari est un avocat agréé près de la Cour Suprême et depuis janvier 2005 le Bâtonnier de l’Ordre des Avocats du Barreau d’Oran. Il est notamment l’avocat-conseil du Consulat Général de France à Oran.",
                      "status": "accepted"
                    },
                    {
                      "id": 117,
                      "page": "salah-eddine",
                      "description": "Le cabinet de Maître Salah Eddine est situé place Commandant Medjdoub (ex place Hoche), dans le centre-ville d’Oran. Maître Salah Eddine est un avocat inscrit au barreau d’Oran spécialisé dans le droit des affaires.",
                      "status": "accepted"
                    },
                    {
                      "id": 118,
                      "page": "wafa-boukadoum",
                      "description": "Le cabinet de Maître Wafa Boukadoum est situé dans le centre-ville d’Oran. Maître Wafa Boukadoum est un avocat inscrit au Barreau d’Oran et agréé près la Cour Suprême et le Conseil d’Etat.",
                      "status": "accepted"
                    },
                    {
                      "id": 119,
                      "page": "yahla-foued",
                      "description": "Le cabinet de Maître Yahla Foued est situé dans le centre-ville d’Oran. Maître Yahla Foued est un avocat inscrit au barreau d’Oran.",
                      "status": "accepted"
                    },
                    {
                      "id": 120,
                      "page": "ets-alloun",
                      "description": "ALLOUN-ASSISTANCE-ETSAA Bureau de Conseil Juridique Entreprise de Travaux de Secrétariat et d’Assistance Administrative Cabinet de Conseil, études et Assistance en Investissement. Notre établissement est créé pour vous rendre le meilleur service possible dont nous procurons avec l’intention d’être à la hauteur de vos attentes...",
                      "status": "accepted"
                    },
                    {
                      "id": 121,
                      "page": "maitre-bennai",
                      "description": "Maitre BENNAI, avocat algérien, vous propose ses services dans tous les domaines du droit algérien: Pénal, droit de la famille, droit foncier, droit social, droit civil, droit commerce , droit fiscal , droit administratif.",
                      "status": "accepted"
                    },
                    {
                      "id": 122,
                      "page": "union-franco-algerien",
                      "description": "Président Abderrazak BOUDJELTI 74 rue Blanche – 75009 Paris Email : boudjelti.avocat@gmail.com Vices-Présidents Dalila AHMEDI Email : ahmedi.cabinetavocat@gmail.com Farid SAIB Email : faridsaib.avocatparis@yahoo.fr",
                      "status": "accepted"
                    },
                    {
                      "id": 123,
                      "page": "amine-mouheb",
                      "description": "Avocat en droit algérien et droit français Avocat nationalité française Avocat d’affaire Avocat droit des étrangers Avocat droit de la famille en France et en Algérie Avocat en droit du divorce en France et en Algérie Avocat en droit des contrats",
                      "status": "accepted"
                    },
                    {
                      "id": 124,
                      "page": "okba-bellabas",
                      "description": "",
                      "status": "accepted"
                    },
                    {
                      "id": 125,
                      "page": "avocat-algerien-baaziz-amine",
                      "description": "Vous représenter, vous défendre devant les juridictions ( tribunaux, les cours d’appel, tribunaux administratif …), les administrations, les organes disciplinaires et tout autres organismes, sur tout les territoire national.",
                      "status": "accepted"
                    },
                    {
                      "id": 126,
                      "page": "idir-bouchami",
                      "description": "",
                      "status": "accepted"
                    },

                      {
                        "id": 127,
                        "page": "abdenasser belmihoub",
                        "description": "",
                        "status": "accepted"
                      },
                      {
                        "id": 128,
                        "page": "rim dellys khoumeri",
                        "description": "",
                        "status": "accepted"
                      },
                      {
                        "id": 129,
                        "page": "avocatalgerien avocatalgerien",
                        "description": "le Cabinet vous offre ses services juridiques, conseil et assistance qui répondent a vos besoins.Nous intervenons tant après des juridictions de droit commun, tribunaux d’instance, cour d’appel, tribunal administratif, affaire sociale, affaire commerciale,affaire pénale …En tenant compte des réglementations et de leurs évolution constante, nous vous aidons à construire les solutions adaptées à votre entreprise.",
                        "status": "accepted"
                      },
                      {
                        "id": 130,
                        "page": "avocatalgerien avocatalgerien",
                        "description": "Nous sommes :Un cabinet d’avocats international indépendant spécialiste du droit algérien, du droit libyen, et du droit marocain. Le cabinet est spécialisé quasi exclusivement dans le droit et la fiscalité des pays du Maghreb (Algérie Libye, Maroc), et dans le droit international des relations économiques..Un cabinet d’avocats international offrant des services adaptés et créateurs de valeur Le cabinet se distingue par la connaissance approfondie qu’ont ses membres des spécificités juridiques, fiscales et aussi culturelles de l’Algérie, de la Libye,et du Maroc..Le cabinet est de ce fait apte à apporter à ses clients, au moyen d’une assistance personnalisée de qualité, des solutions pratiques et innovantes.Dans sa démarche de conseil, le cabinet conçoit le droit comme un instrument de la stratégie de l’entreprise et de création de valeur. Un cabinet d’avocats international possédant des compétences internationalement reconnues Le cabinet bénéficie d’une compétence reconnue acquise près de trente ans de pratique du droit algérien, du droit libyen, et du droit marocain.Cette expertise établie lui permet d’intervenir de manière pragmatique et efficace dans des opérations d’une complexité croissante, s’inscrivant dans des cadres juridiques et fiscaux évoluant rapidement. Un cabinet d’avocats international dont la réactivité et a disponibilité sont à la mesure de l’attente de ses clients Un cabinet d’avocats international garantissant une confidentialité absolueLe cabinet traite avec une confidentialité absolue tous les dossiers relatifs aux pays où il opère.",
                        "status": "accepted"
                      },
                      {
                        "id": 131,
                        "page": "bmavocats bmavocats",
                        "description": "La societé Bouziane et Mokhtari est une societé d’avocats Algériens , indépendante et dédiée au droit des affaires, accompagnant une clientèle Algérienne et international1-La mission de la sociétéParce que l’ignorance des règles juridiques peut entraîner des conséquences irréversibles pour l’entreprise, la mission de la société est de :Déterminer avec l’entrepreneur la faisabilité de son projetDe l’informer de ses droits et obligations compte tenu de l’évolution constante de règles juridiques,De lui apporter la garantie juridique lui permettant de créer et protéger sa structureDe le défendre en cas de litige",
                        "status": "accepted"
                      },
                      {
                        "id": 132,
                        "page": "avocatalgerien avocatalgerien",
                        "description": "Maître Ahcène BOZETINE a fondé son cabinet d’Avocat à Paris en 1996 et exercé à titre individuel pendant 5 années.Rejoint par Maîtres Rachid HALLAL et Yahia AMNACHE au courant de l’année 2001, ils ont constitué en 2005 la Société d’Avocats BOZETINE-AMNACHE-HALLAL, pour mieux répondre aux besoins et attentes accrus de leurs clients.La société d’Avocats, BOZETINE-AMNACHE-HALLAL conseille, assiste et représente en justice ses clients. Ses domaines de compétences sont :Forte de sa connaissance du droit algérien, la Société d’Avocats BOZETINE-AMNACHE-HALLAL a créé une structure en Algérie dont le marché, en pleine expansion, présente un fort intérêt pour les domaines de compétences du Cabinet.Ainsi, elle ambitionne d’assister les sociétés désireuses de s’implanter en Algérie et d’accompagner ses clients algériens en matière de :",
                        "status": "accepted"
                      },
                      {
                        "id": 133,
                        "page": "chernane akli maître",
                        "description": "",
                        "status": "accepted"
                      },
                      {
                        "id": 134,
                        "page": "bouchelaghem hamza maître",
                        "description": "",
                        "status": "accepted"
                      },
                      {
                        "id": 135,
                        "page": "eddine houssem",
                        "description": "",
                        "status": "accepted"
                      },

                        {
                          "id": 136,
                          "page": "avocatalgérien avocatalgérien",
                          "description": "",
                          "status": "accepted"
                        },
                        {
                          "id": 137,
                          "page": "boudjenah boudjenah",
                          "description": "Le cabinet Boudjenah s’est crée en 2009 il se charge de divers affaires détrangers droit international droit de famille civil et droit pénal droit d’assurances droit commercial droit de l’homme ect",
                          "status": "accepted"
                        },
                        {
                          "id": 138,
                          "page": "avocatalgérien avocatalgérien",
                          "description": "",
                          "status": "accepted"
                        },
                        {
                          "id": 139,
                          "page": "avocatalgérien avocatalgérien",
                          "description": "",
                          "status": "accepted"
                        },
                        {
                          "id": 140,
                          "page": "avocatalgérien avocatalgérien",
                          "description": "",
                          "status": "accepted"
                        },
                        {
                          "id": 141,
                          "page": "habchi habchi",
                          "description": "Création de sociétés et suivi juridiqueCession et restructuration d’entreprisesCessions de fonds de commerceCommunauté -IndivisionDivorceFiliation et AdoptionMesures de protection des personnesProcédures de recouvrementBaux commerciauxEntreprises en difficultéDroit de la constructionConseil en droit du travailContentieux en droit du travailDroit de la sécurité socialeDroit des contrats et des marchés publicsDroit de la fonction publique.Refus d’agrément ou d’autorisationresponsabilité de l’administrationdélégations de service publicmarché public, travaux public, expertise, recours de candidats évincés après procédure d’appel d’offre.",
                          "status": "accepted"
                        },
                        {
                          "id": 142,
                          "page": "avocatalgérien avocatalgérien",
                          "description": "",
                          "status": "accepted"
                        },
                        {
                          "id": 143,
                          "page": "avocatalgérien avocatalgérien",
                          "description": "",
                          "status": "accepted"
                        },
                        {
                          "id": 144,
                          "page": "avocatalgerien avocatalgerien",
                          "description": "Notre cabinet a ouvert en 2007 un bureau à Alger pour y accompagner ses clients dans la réalisation de leurs projets et notamment, en matière d’opérations internationales, d’investissements étrangers en Algérie et algériens à l’étranger, dans les secteurs de l’immobilier, des énergies renouvelables et des opérations de financement.Notre cabinet est le conseil de ministères et d’administrations, d’entreprises publiques, de banques multilatérales, de groupes internationaux, d’institutions financières et d’entreprises industrielles.Notre cabinet assiste également ses clients au contentieux, que ce soit devant les juridictions algériennes ou arbitrales.Nos avocats travaillent en étroite collaboration avec nos équipes basées à Paris et également avec nos autres bureaux en Afrique, en Asie et au Moyen-Orient.",
                          "status": "accepted"
                        },

                          {
                            "id": 145,
                            "page": "avocatalgérien avocatalgérien",
                            "description": "",
                            "status": "accepted"
                          },
                          {
                            "id": 146,
                            "page": "avocatalgérien avocatalgérien",
                            "description": "",
                            "status": "accepted"
                          },
                          {
                            "id": 147,
                            "page": "avocatalgérien avocatalgérien",
                            "description": "Avocate ayant prêter serment en 2010, je dispose d’un cabinet sis à côté du nouveau tribunal de cheraga, avec une bonne expérience comme juriste de banque et d’entreprise, je donne les avis juridiques par Mail en langue arabe ou française, je travaille sur les règlements à l’amiable, le pré-contentieux ainsi que le contentieux dans toutes les branches de droit,je prend en charge toutes les Affaires de droits particuliers et entreprises ( sociales, commerciales, pénales… etc).Je me déplace pour des réunions mensuelles ou hebdomadaires entre (avocat-Entreprise).Pour plus d’informations merci de me contacter sur le numéro citer ci-dessous ou adresse Mail.",
                            "status": "accepted"
                          },
                          {
                            "id": 148,
                            "page": "law firm mebarki",
                            "description": "Notre cabinet fournit des services à de nombreuses entreprises dans plusieurs secteurs (automobile, ingénierie, construction, pharmaceutique, Télécom, publicité, etc …);Nous apportons également une assistance quotidienne sur les questions juridiques et réglementaires pour les grands groupes internationaux ayant investi en Algérie ou souhaitant investir dans ce pays, ainsi que pour les institutions et entreprises publiques et privées algériennes;Nous sommes en mesure de représenter nos clients auprès les tribunaux, cela nous permet de fournir les services les plus avantageux et complets sur le marché.",
                            "status": "accepted"
                          },
                          {
                            "id": 149,
                            "page": "allam benaouda",
                            "description": "Avocat, conseiller juridique",
                            "status": "accepted"
                          },
                          {
                            "id": 150,
                            "page": "fayçal megherbi",
                            "description": " ",
                            "status": "accepted"
                          },
                          
                            {
                              "id": 151,
                              "page": "benmansour",
                              "description": "",
                              "status": "accepted"
                            },
                            {
                              "id": 152,
                              "page": "avocatalgerien",
                              "description": "Fondé par deux avocats très expérimentés disposant d’une formation et d’une expérience professionnelle algérienne, française et anglo-saxonne dans de prestigieuses universités et des cabinets d’affaires internationaux à Alger, Paris et Londres, Bourabiat Associés a pour vocation d’offrir à ses clients une offre se voulant pionnière en Algérie combinant l’assistance d’un Cabinet totalement indépendant, solidement ancré localement et offrant à ses clients des prestations juridiques et un service conformes aux standards internationaux dans la plupart des disciplines du droit des affaires...",
                              "status": "accepted"
                            },
                            {
                              "id": 153,
                              "page": "avocate16",
                              "description": "Avocate agréée près de la Cour Suprême et du Conseil d’État, ayant à son actif une longue expérience de 16 ans au Barreau, ainsi qu’une vaste expérience en: Droit Civil, Foncier, Commerciale, Pénale, et administratif, dans la rédaction de différents Contrats et Marchés, car ayant longuement accompagné les Sociétés étrangères en Algérie dans la création de ces dernières, dans la création de bureaux de liaisons, dans le règlement de différents Litiges, entre Sociétés, ainsi qu’ entre Sociétés et particuliers ou Administrations...",
                              "status": "accepted"
                            },
                            {
                              "id": 154,
                              "page": "farouk",
                              "description": "",
                              "status": "accepted"
                            },
                            {
                              "id": 155,
                              "page": "ali",
                              "description": "Avocats avec bureau dans la capitale de la céramique de l’Espagne (Castellón), offrent leurs services professionnels aux citoyens algériens qui veulent vivre, investir, créer des entreprises ou acheter de l’immobilier, traiter un permis de séjour, travailler, assurance maladie…Nous traitons tout ce qui est nécessaire en Espagne et au consulat général d’Espagne à Alger.Attention professionnelleNous répondons à l’email, au téléphone, au WhatsApp et au Telegram.",
                              "status": "accepted"
                            },
                            {
                              "id": 156,
                              "page": "bourzam kamel",
                              "description": "",
                              "status": "accepted"
                            },
                            {
                              "id": 157,
                              "page": "mohiedine",
                              "description": "Le cabinet d’avocat Me TAIEB, est situé au 39, Rue Gharbi Guemraoui, Bouira (à 100 km d’Alger).Le cabinet connaît un développement constant et son équipe se compose d’avocats et d’assistants dynamiques et réactifs afin de répondre aux besoins de ses clients...",
                              "status": "accepted"
                            },
                            {
                              "id": 158,
                              "page": "benzadi",
                              "description": "",
                              "status": "accepted"
                            },
                            {
                              "id": 159,
                              "page": "nassimaamal",
                              "description": "",
                              "status": "accepted"
                            },
                            {
                              "id": 160,
                              "page": "rachid",
                              "description": "cabinet d’avocat",
                              "status": "accepted"
                            },
                            {
                              "id": 161,
                              "page": "youcef",
                              "description": "",
                              "status": "accepted"
                            },

                            {
                              "id":344,
                              "page":"mebarakou",
                              "description":"avocat avec 15 ans d'experience ",
                              "status":"pending"
                            }
























  ]

  );
  const [rowToAccept, setRowToAccept] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleAcceptRow = (idx) => {
    setRowToAccept(idx);
    handleSubmit(idx)
  };

  const handleSubmit = (idx) => {
    const newRow = rows.map(user =>
        user.id === idx && user.status==="pending" ? { ...user, status:'accepted' } : user.id === idx? { ...user, status:'pending' }:user
    );
    setRows(newRow);
  };
  return (
      <div className="App-admin">
        <div className="content">
          <TableWaitingList rows={rows} deleteRow={handleDeleteRow} acceptRow={handleAcceptRow} />
          <div className="button-container">
            <Link to="/admin" className="btn">
              Main Page
            </Link>
          </div>
        </div>
      </div>
  );
}

export default WaitingList;
