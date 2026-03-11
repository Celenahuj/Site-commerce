-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mer. 11 mars 2026 à 09:49
-- Version du serveur : 10.11.14-MariaDB-0+deb12u2
-- Version de PHP : 8.3.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `hujol3`
--

-- --------------------------------------------------------

--
-- Structure de la table `BLOG_Articles`
--

CREATE TABLE `BLOG_Articles` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `content` text NOT NULL,
  `image` varchar(500) DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `BLOG_Articles`
--

INSERT INTO `BLOG_Articles` (`id`, `title`, `date`, `content`, `image`, `category_id`, `created_at`, `updated_at`) VALUES
(1, 'Understanding JavaScript Closures', '2021-01-01', 'Les closures sont l\'un des concepts les plus puissants et les plus incompris de JavaScript. Une closure se forme lorsqu\'une fonction interne accède aux variables de sa fonction externe, même après que cette dernière ait terminé son exécution. Ce mécanisme repose sur le principe de la portée lexicale (lexical scope), qui détermine comment les variables sont résolues dans du code imbriqué. Les closures permettent de créer des variables privées, d\'implémenter le pattern module, et sont essentielles pour comprendre les callbacks, les promises et les gestionnaires d\'événements. Dans cet article, nous explorerons en profondeur comment fonctionnent les closures, pourquoi elles sont si importantes dans le développement JavaScript moderne, et comment les utiliser efficacement dans vos projets. Nous verrons également les pièges courants à éviter et les bonnes pratiques pour tirer le meilleur parti de ce mécanisme fondamental.', 'https://picsum.photos/200/300?random=1', 1, '2025-11-07 09:14:50', '2025-11-07 09:14:50'),
(2, 'JavaScript ES6 Features', '2021-01-03', 'ECMAScript 6, également connu sous le nom d\'ES2015, a révolutionné la façon dont nous écrivons du JavaScript en introduisant de nombreuses nouvelles fonctionnalités qui rendent le code plus concis, lisible et maintenable. Parmi les ajouts les plus significatifs, on trouve les arrow functions qui offrent une syntaxe plus courte et gèrent différemment le contexte this, la déstructuration qui permet d\'extraire facilement des valeurs d\'objets et de tableaux, l\'opérateur spread qui simplifie la copie et la fusion de données, les template literals pour une meilleure gestion des chaînes de caractères, et les modules ES6 pour organiser votre code. Les classes apportent une syntaxe plus claire pour la programmation orientée objet, tandis que let et const remplacent avantageusement var pour la déclaration de variables. Cet article vous guide à travers toutes ces fonctionnalités essentielles avec des exemples pratiques et des cas d\'usage réels pour vous permettre de maîtriser ES6 et d\'écrire du code JavaScript moderne.', 'https://picsum.photos/200/300?random=3', 1, '2025-11-07 09:14:50', '2025-11-07 09:14:50'),
(3, 'Introduction to React Hooks', '2021-01-05', 'React Hooks ont transformé la manière dont nous construisons des composants React en permettant d\'utiliser l\'état et d\'autres fonctionnalités de React sans avoir besoin d\'écrire des classes. Introduits dans React 16.8, les Hooks résolvent de nombreux problèmes que les développeurs rencontraient avec les composants de classe, notamment la réutilisation de la logique avec état et la complexité de la gestion du cycle de vie. Le Hook useState permet de gérer l\'état local dans les composants fonctionnels, tandis que useEffect remplace les méthodes de cycle de vie comme componentDidMount et componentDidUpdate en unifiant la logique des effets de bord. Les Hooks personnalisés vous permettent d\'extraire la logique des composants dans des fonctions réutilisables, favorisant ainsi la composition et la séparation des préoccupations. Dans ce guide complet, nous explorerons les Hooks les plus couramment utilisés, leurs règles d\'utilisation, et comment créer vos propres Hooks personnalisés pour construire des applications React plus élégantes et maintenables.', 'https://picsum.photos/200/300?random=5', 1, '2025-11-07 09:14:50', '2025-11-07 09:14:50'),
(4, 'CSS Grid Layout Essentials', '2021-01-11', 'CSS Grid est un système de mise en page bidimensionnel puissant qui révolutionne la façon dont nous créons des interfaces web complexes et responsives. Contrairement à Flexbox qui est conçu pour les mises en page unidimensionnelles, Grid excelle dans la création de layouts en deux dimensions, gérant simultanément les lignes et les colonnes. Avec Grid, vous pouvez définir des zones de template nommées qui rendent votre code plus lisible et maintenable, utiliser le placement automatique pour positionner intelligemment vos éléments, et créer des grilles responsives sans avoir besoin de media queries dans certains cas grâce à des fonctions comme minmax() et auto-fit. Les possibilités sont infinies : des galeries d\'images dynamiques aux layouts de pages complexes, en passant par des composants d\'interface utilisateur sophistiqués. Cet article vous apprendra les concepts fondamentaux de Grid, les propriétés essentielles comme grid-template-areas, grid-gap, et les techniques avancées pour créer des mises en page modernes et flexibles qui s\'adaptent parfaitement à tous les écrans.', 'https://picsum.photos/200/300?random=11', 1, '2025-11-07 09:14:50', '2025-11-07 09:14:50'),
(5, 'Web Performance Optimization', '2021-01-12', 'L\'optimisation des performances web est cruciale pour offrir une expérience utilisateur exceptionnelle et améliorer le référencement de votre site. Dans un monde où les utilisateurs s\'attendent à des temps de chargement quasi instantanés, chaque milliseconde compte. Les Core Web Vitals de Google, incluant le Largest Contentful Paint (LCP), le First Input Delay (FID) et le Cumulative Layout Shift (CLS), sont devenus des métriques essentielles pour mesurer la qualité de l\'expérience utilisateur. Les techniques d\'optimisation incluent le lazy loading pour charger les images et les composants uniquement lorsqu\'ils sont nécessaires, le code splitting pour diviser votre application en chunks plus petits et chargeables à la demande, la mise en cache intelligente des ressources, la minification et la compression des fichiers CSS et JavaScript, et l\'utilisation de CDN pour servir vos assets statiques. Cet article explore en profondeur ces stratégies et bien d\'autres, vous fournissant les outils et connaissances nécessaires pour construire des sites web ultra-rapides qui ravissent vos utilisateurs.', 'https://picsum.photos/200/300?random=12', 1, '2025-11-07 09:14:50', '2025-11-07 09:14:50'),
(6, 'Progressive Web Apps (PWA) Guide', '2021-01-16', 'Les Progressive Web Apps (PWA) représentent l\'évolution naturelle du web, combinant le meilleur des applications web et des applications natives. Une PWA offre une expérience similaire à celle d\'une application native tout en restant accessible via un navigateur web, sans nécessiter de téléchargement depuis un store. Les Service Workers sont au cœur des PWA, permettant de gérer le cache, d\'intercepter les requêtes réseau, et de faire fonctionner votre application hors ligne. Le fichier manifest définit comment votre application apparaît sur l\'écran d\'accueil de l\'utilisateur, avec son icône, son nom et ses couleurs de thème. Les stratégies de mise en cache vous permettent de contrôler précisément quelles ressources sont disponibles hors ligne et comment elles sont actualisées. Les notifications push gardent vos utilisateurs engagés même lorsqu\'ils ne sont pas sur votre site. Dans ce guide complet, vous apprendrez à transformer votre site web en une PWA performante qui fonctionne sur tous les appareils, offre une expérience utilisateur fluide même avec une connexion instable, et peut être installée comme une application native.', 'https://picsum.photos/200/300?random=16', 1, '2025-11-07 09:14:50', '2025-11-07 09:14:50'),
(7, 'Vue.js 3 Composition API', '2021-01-17', 'La Composition API est l\'une des fonctionnalités les plus significatives introduites dans Vue.js 3, offrant une nouvelle façon d\'organiser et de réutiliser la logique dans vos composants. Contrairement à l\'Options API traditionnelle qui organise le code par type d\'option (data, methods, computed, etc.), la Composition API vous permet de regrouper le code par fonctionnalité logique, rendant vos composants plus lisibles et maintenables, particulièrement pour les composants complexes. Avec setup(), la nouvelle fonction d\'entrée des composants, vous pouvez définir des variables réactives avec ref() et reactive(), créer des propriétés calculées avec computed(), et gérer des effets de bord avec watch() et watchEffect(). La possibilité de composer et de réutiliser la logique via des fonctions de composition personnalisées (composables) est un game-changer pour l\'architecture de vos applications Vue. Ce guide détaillé vous apprendra à migrer progressivement vers la Composition API, à structurer efficacement votre code, et à tirer parti de cette approche puissante pour construire des applications Vue.js 3 modernes, performantes et facilement maintenables.', 'https://picsum.photos/200/300?random=17', 1, '2025-11-07 09:14:50', '2025-11-07 09:14:50'),
(8, 'Mastering Async/Await in JavaScript', '2021-01-02', 'La programmation asynchrone est au cœur du développement JavaScript moderne, et async/await représente l\'évolution la plus élégante de cette approche. Avant async/await, les développeurs devaient jongler avec des callbacks imbriqués (callback hell) ou des chaînes de promises parfois difficiles à lire. La syntaxe async/await simplifie drastiquement l\'écriture de code asynchrone en le rendant aussi lisible que du code synchrone. Une fonction marquée avec le mot-clé async retourne automatiquement une Promise, tandis que await met en pause l\'exécution de la fonction jusqu\'à ce que la Promise soit résolue. La gestion des erreurs devient intuitive grâce aux blocs try/catch traditionnels, et l\'exécution parallèle de plusieurs opérations asynchrones est facilitée avec Promise.all() et Promise.race(). Comprendre les patterns d\'exécution, savoir quand utiliser await et quand lancer des opérations en parallèle, maîtriser la gestion des erreurs et des timeouts sont des compétences essentielles. Dans cet article approfondi, nous explorons tous ces aspects avec des exemples concrets pour vous permettre de maîtriser parfaitement async/await et d\'écrire du code asynchrone élégant et performant.', NULL, 2, '2025-11-07 09:14:50', '2025-11-07 09:14:50'),
(9, 'Building RESTful APIs with Node.js', '2021-01-04', 'Node.js et Express forment une combinaison puissante pour créer des APIs RESTful robustes et scalables. REST (Representational State Transfer) est un style architectural qui définit un ensemble de contraintes pour créer des services web, utilisant les méthodes HTTP standard (GET, POST, PUT, DELETE) pour manipuler les ressources. Express, le framework web minimaliste pour Node.js, fournit une structure élégante pour définir vos routes, gérer les middlewares, et organiser votre code serveur. La construction d\'une API RESTful implique la compréhension des principes REST, la structuration cohérente de vos endpoints, l\'implémentation de la validation des données entrantes, la gestion appropriée des codes de statut HTTP, et la mise en place de mécanismes d\'authentification et d\'autorisation pour sécuriser vos ressources. Les middlewares jouent un rôle crucial dans le traitement des requêtes, permettant d\'ajouter des fonctionnalités comme le logging, la gestion CORS, le parsing du body, et la validation. Ce guide complet vous accompagne de la configuration initiale jusqu\'aux bonnes pratiques de production, incluant la documentation avec Swagger, les tests avec Jest ou Mocha, et le déploiement de votre API.', NULL, 2, '2025-11-07 09:14:50', '2025-11-07 09:14:50'),
(10, 'State Management with Redux', '2021-01-06', 'Redux est une bibliothèque de gestion d\'état prévisible qui a révolutionné la façon dont nous gérons les données dans les applications JavaScript, particulièrement avec React. Basé sur trois principes fondamentaux - une source unique de vérité (single source of truth), un état en lecture seule, et des modifications via des fonctions pures - Redux apporte une architecture claire et testable à vos applications. Le store Redux contient l\'intégralité de l\'état de votre application, les actions décrivent ce qui s\'est passé, et les reducers spécifient comment l\'état change en réponse aux actions. Cette approche unidirectionnelle du flux de données rend votre application prévisible et facilite le débogage grâce à des outils comme Redux DevTools. Les middlewares comme redux-thunk ou redux-saga permettent de gérer les effets de bord et les opérations asynchrones. Bien que Redux puisse sembler verbeux au premier abord, Redux Toolkit (RTK) simplifie considérablement son utilisation en fournissant des abstractions et des utilitaires pour réduire le boilerplate. Cet article explore en profondeur tous ces concepts avec des exemples pratiques pour vous aider à maîtriser Redux et à l\'intégrer efficacement dans vos projets.', 'https://picsum.photos/200/300?random=6', 2, '2025-11-07 09:14:50', '2025-11-07 09:14:50'),
(11, 'Docker for JavaScript Developers', '2021-01-14', 'Docker a transformé la façon dont nous développons, déployons et gérons nos applications en introduisant la conteneurisation, une approche qui encapsule une application et toutes ses dépendances dans un conteneur isolé et portable. Pour les développeurs JavaScript, Docker résout le fameux problème \"ça marche sur ma machine\" en garantissant que votre application s\'exécutera de manière identique en développement, en test et en production. Un Dockerfile définit l\'environnement de votre application étape par étape, depuis l\'image de base (comme node:alpine) jusqu\'à l\'installation des dépendances et la configuration de l\'application. Docker Compose permet d\'orchestrer plusieurs conteneurs, par exemple votre application Node.js, une base de données MongoDB, et un serveur Redis, facilitant le développement d\'architectures microservices. Les volumes Docker persistent vos données au-delà du cycle de vie des conteneurs, tandis que les networks permettent la communication entre conteneurs. Ce guide vous apprend les bases de Docker, comment containeriser vos applications JavaScript, optimiser vos images pour la production, gérer les secrets et variables d\'environnement, et déployer vos conteneurs sur des plateformes cloud comme AWS, Azure ou Google Cloud.', NULL, 2, '2025-11-07 09:14:50', '2025-11-07 09:14:50'),
(12, 'Securing Your Node.js Applications', '2021-01-15', 'La sécurité des applications web est un aspect critique que tout développeur Node.js doit maîtriser pour protéger ses applications et les données des utilisateurs contre les attaques malveillantes. Les vulnérabilités les plus courantes incluent les injections SQL qui peuvent être exploitées via des requêtes mal sanitisées, les attaques XSS (Cross-Site Scripting) permettant d\'injecter du code malveillant dans les pages web, et les attaques CSRF (Cross-Site Request Forgery) qui trompent les utilisateurs pour exécuter des actions non désirées. L\'authentification et l\'autorisation robustes sont essentielles : utilisez des bibliothèques éprouvées comme Passport.js, hashage sécurisé des mots de passe avec bcrypt, tokens JWT pour les API stateless, et implémentez des stratégies comme OAuth2 pour l\'authentification tierce. La validation et la sanitisation des entrées utilisateur, la mise en place de headers de sécurité HTTP avec helmet.js, la limitation du taux de requêtes pour prévenir les attaques DDoS, le chiffrement des données sensibles, et la gestion sécurisée des sessions sont autant de pratiques essentielles. Cet article détaillé explore toutes ces facettes de la sécurité avec des exemples concrets et des recommandations pour construire des applications Node.js sécurisées et résilientes.', 'https://picsum.photos/200/300?random=15', 2, '2025-11-07 09:14:50', '2025-11-07 09:14:50'),
(13, 'GraphQL vs REST: Which to Choose?', '2021-01-13', 'Le choix entre GraphQL et REST pour votre API est une décision architecturale importante qui impactera la façon dont votre frontend communique avec votre backend. REST, le style architectural établi depuis des années, utilise plusieurs endpoints avec des méthodes HTTP standard et retourne des structures de données fixes. GraphQL, développé par Facebook, propose une approche radicalement différente avec un seul endpoint et un langage de requête puissant permettant aux clients de demander exactement les données dont ils ont besoin, ni plus ni moins. Cette flexibilité résout le problème d\'over-fetching (récupération de données inutiles) et d\'under-fetching (nécessité de multiples requêtes) courant avec REST. GraphQL offre également une introspection native, une documentation auto-générée via GraphiQL, et un typage fort des données. Cependant, REST a l\'avantage de la simplicité, d\'une mise en cache HTTP native, et d\'une courbe d\'apprentissage moins abrupte. Le choix dépend de votre cas d\'usage : GraphQL excelle pour les applications avec des besoins en données complexes et variés, tandis que REST reste pertinent pour des APIs simples ou publiques. Cet article compare en profondeur ces deux approches, leurs avantages et inconvénients, pour vous aider à faire un choix éclairé selon votre contexte.', 'https://picsum.photos/200/300?random=13', 2, '2025-11-07 09:14:50', '2025-11-07 09:14:50'),
(14, 'Getting Started with TypeScript', '2021-01-07', 'TypeScript est un sur-ensemble typé de JavaScript qui compile en JavaScript pur, apportant la puissance du typage statique à l\'écosystème JavaScript. Développé et maintenu par Microsoft, TypeScript résout de nombreux problèmes rencontrés dans les grandes bases de code JavaScript en détectant les erreurs au moment de la compilation plutôt qu\'à l\'exécution. Le système de types de TypeScript est remarquablement expressif, supportant les types primitifs, les interfaces pour décrire la forme des objets, les types union et intersection, les génériques pour créer des composants réutilisables et type-safe, et même des types conditionnels avancés. L\'inférence de type intelligente signifie que vous n\'avez souvent pas besoin d\'annoter explicitement vos types, TypeScript les déduit automatiquement. Les outils d\'édition modernes comme VS Code offrent une autocomplétion exceptionnelle, une navigation dans le code facilitée, et une refactorisation sûre grâce aux informations de type. TypeScript s\'intègre parfaitement avec les frameworks populaires comme React, Angular, Vue, et Node.js. Ce guide complet vous initie aux concepts fondamentaux de TypeScript, vous apprend à configurer votre environnement avec tsconfig.json, et vous montre comment tirer parti du typage pour écrire du code plus robuste, maintenable et auto-documenté.', 'https://picsum.photos/200/300?random=7', 3, '2025-11-07 09:14:50', '2025-11-07 09:14:50'),
(15, 'Building a Full-Stack Application with MERN', '2021-01-08', 'La stack MERN - MongoDB, Express, React, et Node.js - est devenue l\'une des combinaisons technologiques les plus populaires pour construire des applications web full-stack modernes. Cette stack JavaScript de bout en bout vous permet d\'utiliser le même langage côté client et côté serveur, facilitant le partage de code et réduisant le changement de contexte mental. MongoDB, base de données NoSQL orientée documents, stocke vos données dans un format JSON-like flexible et scalable. Express fournit le framework web minimaliste pour Node.js, gérant le routage et les middlewares de votre API backend. React crée des interfaces utilisateur interactives et performantes grâce à son architecture basée sur les composants et son DOM virtuel. Node.js exécute votre code JavaScript côté serveur avec des performances exceptionnelles grâce à son modèle event-driven non-bloquant. Construire une application MERN implique de concevoir votre schéma de base de données avec Mongoose, d\'implémenter une API RESTful ou GraphQL avec Express, de créer des composants React réutilisables, de gérer l\'état avec Context API ou Redux, et de déployer l\'ensemble sur des plateformes comme Heroku, Vercel ou AWS. Ce tutoriel complet vous guide à travers chaque étape de la création d\'une application MERN, de la configuration initiale au déploiement en production.', 'https://picsum.photos/200/300?random=8', 3, '2025-11-07 09:14:50', '2025-11-07 09:14:50'),
(16, 'Unit Testing in JavaScript', '2021-01-09', 'Les tests unitaires sont essentiels pour garantir la qualité, la fiabilité et la maintenabilité de votre code JavaScript. Un test unitaire vérifie qu\'une unité de code - généralement une fonction ou une méthode - fonctionne comme prévu de manière isolée. Jest, développé par Facebook, est devenu le framework de test le plus populaire pour JavaScript grâce à sa configuration zéro, son exécution parallèle rapide, et ses fonctionnalités intégrées comme le mocking, le coverage, et les snapshots. Mocha, plus ancien mais toujours pertinent, offre plus de flexibilité en vous laissant choisir vos propres bibliothèques d\'assertion et de mocking. Le Test-Driven Development (TDD) inverse le processus traditionnel : vous écrivez d\'abord le test qui échoue, puis le code minimal pour le faire passer, et enfin vous refactorisez. Cette approche améliore la conception du code, réduit les bugs, et fournit une documentation vivante de votre code. Les tests doivent être FIRST : Fast (rapides), Independent (indépendants), Repeatable (reproductibles), Self-validating (auto-validants), et Timely (opportuns). Cet article explore les meilleures pratiques de testing, comment structurer vos tests, utiliser les mocks et stubs efficacement, mesurer et améliorer votre couverture de code, et intégrer les tests dans votre workflow CI/CD.', 'https://picsum.photos/200/300?random=9', 3, '2025-11-07 09:14:50', '2025-11-07 09:14:50'),
(17, 'Advanced JavaScript Patterns', '2021-01-10', 'Les design patterns sont des solutions éprouvées à des problèmes récurrents de conception logicielle, et leur maîtrise distingue les développeurs JavaScript expérimentés des débutants. Le Module Pattern encapsule la logique et les données privées en utilisant les closures, créant des espaces de noms propres et évitant la pollution du scope global. Le Revealing Module Pattern améliore cette approche en retournant explicitement un objet public avec les méthodes et propriétés que vous souhaitez exposer. Le Singleton Pattern garantit qu\'une classe n\'a qu\'une seule instance et fournit un point d\'accès global, utile pour les gestionnaires de configuration ou les pools de connexions. L\'Observer Pattern, fondamental dans la programmation événementielle, permet à un objet (le subject) de notifier automatiquement tous ses observers des changements d\'état. Le Factory Pattern abstrait le processus de création d\'objets, tandis que le Prototype Pattern permet l\'héritage en JavaScript. Les patterns fonctionnels comme la composition, le currying, et les fonctions d\'ordre supérieur sont également cruciaux dans le JavaScript moderne. Ce guide approfondi explore ces patterns et bien d\'autres, avec des exemples concrets montrant quand et comment les utiliser pour écrire du code élégant, maintenable et performant qui résiste à l\'épreuve du temps.', 'https://picsum.photos/200/300?random=10', 3, '2025-11-07 09:14:50', '2025-11-07 09:14:50'),
(18, 'Microservices Architecture Patterns', '2021-01-18', 'L\'architecture microservices décompose une application monolithique en un ensemble de services indépendants, chacun responsable d\'une capacité métier spécifique et pouvant être développé, déployé et mis à l\'échelle indépendamment. Cette approche offre de nombreux avantages : scalabilité fine, résilience accrue, flexibilité technologique permettant d\'utiliser différents langages et bases de données par service, et facilitation du développement en équipes parallèles. Cependant, elle introduit également de la complexité, notamment dans la communication inter-services (synchrone via REST/gRPC ou asynchrone via message queues), la découverte de services avec des outils comme Consul ou Eureka, et l\'orchestration avec Kubernetes. L\'API Gateway agit comme point d\'entrée unique, gérant le routage, l\'authentification, et l\'agrégation des réponses. Les patterns comme Circuit Breaker préviennent les cascades de défaillances, Saga gère les transactions distribuées, et Event Sourcing maintient un log immuable de tous les changements d\'état. La gestion de la cohérence des données dans un système distribué nécessite de repenser les transactions traditionnelles ACID au profit de la cohérence éventuelle. Cet article détaillé explore ces patterns, les défis de l\'architecture microservices, et les meilleures pratiques pour concevoir, implémenter et opérer des systèmes distribués robustes et scalables.', NULL, 3, '2025-11-07 09:14:50', '2025-11-07 09:14:50'),
(19, 'Web Accessibility Best Practices', '2021-01-19', 'L\'accessibilité web n\'est pas seulement une obligation légale dans de nombreux pays, c\'est aussi une responsabilité éthique et une opportunité d\'élargir votre audience en rendant vos sites utilisables par tous, y compris les personnes en situation de handicap. Les Web Content Accessibility Guidelines (WCAG) définissent quatre principes fondamentaux : Perceptible (l\'information doit être présentable de manières que les utilisateurs peuvent percevoir), Opérable (les composants d\'interface doivent être utilisables), Compréhensible (l\'information et l\'interface doivent être compréhensibles), et Robuste (le contenu doit être interprétable par diverses technologies d\'assistance). Le HTML sémantique utilise les bons éléments pour leur signification (nav, article, aside, etc.), facilitant la navigation par lecteur d\'écran. ARIA (Accessible Rich Internet Applications) ajoute des rôles, états et propriétés pour rendre les applications web dynamiques accessibles. La navigation au clavier est essentielle : tous les éléments interactifs doivent être focusables et activables sans souris. Le contraste des couleurs doit respecter les ratios minimaux WCAG, les formulaires doivent avoir des labels associés, et les alternatives textuelles pour les images sont obligatoires. Ce guide complet explore tous ces aspects avec des exemples pratiques et des outils de test pour vous aider à construire des sites web inclusifs qui servent véritablement tous vos utilisateurs.', 'https://picsum.photos/200/300?random=19', 3, '2025-11-07 09:14:50', '2025-11-07 09:14:50'),
(20, 'Modern JavaScript Tooling', '2021-01-20', 'L\'écosystème des outils JavaScript a énormément évolué, transformant la façon dont nous développons, bundlons et déployons nos applications. Les bundlers modernes comme Webpack, bien qu\'avec une courbe d\'apprentissage abrupte, offrent une puissance et une flexibilité inégalées pour gérer les dépendances, optimiser le code, et créer des builds de production sophistiqués avec code splitting, tree shaking, et lazy loading. Vite représente la nouvelle génération de build tools, exploitant les ES modules natifs du navigateur en développement pour un démarrage instantané et un Hot Module Replacement (HMR) ultra-rapide, tout en utilisant Rollup pour des builds de production optimisés. ESBuild, écrit en Go, compile JavaScript et TypeScript à des vitesses vertigineuses, jusqu\'à 100 fois plus rapide que les outils traditionnels. Les task runners comme npm scripts simplifient l\'orchestration des tâches de développement, tandis que les linters (ESLint) et formatters (Prettier) maintiennent la qualité et la cohérence du code. Les transpileurs comme Babel permettent d\'utiliser les dernières fonctionnalités JavaScript tout en supportant les anciens navigateurs. Cet article explore en profondeur ces outils modernes, comment les configurer efficacement, les comparer pour choisir celui qui convient le mieux à votre projet, et optimiser votre workflow de développement pour une productivité maximale.', 'https://picsum.photos/200/300?random=20', 3, '2025-11-07 09:14:50', '2025-11-07 09:14:50'),
(21, 'qsdqsdqsdqs', '2025-12-02', 'kjdnc lqkjsdc lqksjd clqksdc lqksdjbc lqkjsdb clqjksdbc lqjskdb clqjsdbc lqsjkdbc lqsjkb clqkjsdb clqskjbc', 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop', 3, '2026-01-06 13:36:48', '2026-01-06 13:36:48');

-- --------------------------------------------------------

--
-- Structure de la table `BLOG_Categories`
--

CREATE TABLE `BLOG_Categories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `BLOG_Categories`
--

INSERT INTO `BLOG_Categories` (`id`, `name`, `slug`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Front', 'front', 'Articles sur le développement front-end : HTML, CSS, JavaScript, frameworks UI, etc.', '2025-11-07 09:14:50', '2025-11-07 09:14:50'),
(2, 'Back', 'back', 'Articles sur le développement back-end : serveurs, bases de données, APIs, etc.', '2025-11-07 09:14:50', '2025-11-07 09:14:50'),
(3, 'Fullstack', 'fullstack', 'Articles sur le développement full-stack et l\'architecture complète d\'applications web', '2025-11-07 09:14:50', '2025-11-07 09:14:50');

-- --------------------------------------------------------

--
-- Structure de la table `Category`
--

CREATE TABLE `Category` (
  `id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `Category`
--

INSERT INTO `Category` (`id`, `name`) VALUES
(1, 'Pains'),
(2, 'Desserts'),
(3, 'Boissons');

-- --------------------------------------------------------

--
-- Structure de la table `Product`
--

CREATE TABLE `Product` (
  `id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `category` int(11) NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `calories` int(11) DEFAULT NULL,
  `allergens` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `Product`
--

INSERT INTO `Product` (`id`, `name`, `category`, `price`, `image`, `description`, `calories`, `allergens`) VALUES
(1, 'Pain de campagne', 1, '3.50', 'campagne.png', 'Un pain de campagne traditionnel : croûte dorée et croustillante, mie dense et moelleuse, offrant des notes légèrement acidulées et un goût authentique de céréales.', 320, 'GLUTEN, LAIT, ŒUFS, SOJA, SULFITES'),
(2, 'Pain au maïs', 1, '2.70', 'mais.png', 'Pain doré à la croûte fine et craquante, mie douce et légèrement granuleuse, au goût subtilement sucré de maïs. Idéal pour les plats salés ou le petit-déjeuner.', 280, 'GLUTEN, LAIT, ŒUFS, SOJA, SULFITES'),
(3, 'Pain de tradition', 1, '1.50', 'tradition.png', 'Pain de campagne à la croûte dorée et croustillante, mie dense et moelleuse, au goût authentique de céréales avec une légère note acidulée.', 260, 'GLUTEN'),
(4, 'Éclair au chocolat', 2, '2.80', 'eclair.png', 'pâte à choux garnie d’une crème chocolat onctueuse, nappée d’un glaçage fondant.', 280, 'GLUTEN, LAIT, ŒUFS, SOJA, SULFITES'),
(5, 'Cookie gourmand', 2, '3.00', 'cookie.png', 'Cookie généreux à la texture fondante au centre et croustillante sur les bords, garni de pépites de chocolat fondant. Une douceur réconfortante au goût intense et sucré.', 430, 'GLUTEN, LAIT, ŒUFS, SOJA'),
(6, 'Macaron coquelicot', 2, '1.00', 'macaron.png', 'Délicat macaron à la coque lisse et légèrement croquante, renfermant une ganache fondante au parfum floral de coquelicot. Une douceur raffinée et originale.', 150, 'ŒUFS, AMANDES, LAIT, SOJA'),
(7, 'Café crème', 3, '2.80', 'cafe.png', 'Espresso onctueux allongé de lait chaud légèrement mousseux, offrant un équilibre parfait entre l’intensité du café et la douceur du lait. Une boisson réconfortante et veloutée.', 90, 'LAIT'),
(8, 'Chocolat viennois', 3, '3.00', 'chocolat.png', 'Boisson chaude onctueuse à base de chocolat noir fondu et de lait, surmontée d’une généreuse chantilly. Riche, intense et ultra gourmande.', 250, 'LAIT'),
(9, 'Coca-cola', 3, '2.50', 'coca.png', 'Boisson gazeuse rafraîchissante au goût sucré et légèrement acidulé, emblématique et appréciée dans le monde entier.', 139, 'Aucun allergène déclaré.');

-- --------------------------------------------------------

--
-- Structure de la table `ProductImage`
--

CREATE TABLE `ProductImage` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `ProductImage`
--

INSERT INTO `ProductImage` (`id`, `name`, `product_id`) VALUES
(1, 'eclair1.png', 4),
(2, 'eclair2.png', 4),
(3, 'eclair3.png', 4),
(4, 'mais1.png', 2),
(5, 'mais2.png', 2),
(6, 'mais3.png', 2),
(7, 'boisson1.png', 9),
(8, 'boisson2.png', 9),
(9, 'boisson3.png', 9),
(10, 'cookie1.png', 5),
(11, 'cookie2.png', 5),
(12, 'cookie3.png', 5),
(13, 'macaron1.png', 6),
(14, 'macaron2.png', 6),
(15, 'macaron3.png', 6),
(16, 'campagne1.png', 1),
(17, 'campagne2.png', 1),
(18, 'campagne3.png', 1),
(19, 'tradition3.png', 3),
(20, 'tradition2.png', 3),
(21, 'tradition1.png', 3),
(22, 'chocolat1.png', 8),
(23, 'chocolat2.png', 8),
(24, 'chocolat3.png', 8),
(25, 'cafe1.png', 7),
(26, 'cafe2.png', 7),
(27, 'cafe3.png', 7);

-- --------------------------------------------------------

--
-- Structure de la table `User`
--

CREATE TABLE `User` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `User`
--

INSERT INTO `User` (`id`, `email`, `password`, `username`) VALUES
(1, 'exemple@email.com', '123123', 'nini'),
(25, 'cece.surfeuse@gmail.com', '$2y$10$RBfrXGGD1cdPp6Nhm05QIOegqtFFqU8XJzp5HUTUSScbhO2xWKi1y', 'sou'),
(26, 'non@gmail.com', '$2y$10$sc40X.uxSxZBmA7O3V4IieEJfZ1vCF2V2F9o1cwouqHZzB73KDogC', 'non'),
(27, 'frederic.mora@unilim.fr', '$2y$10$wOycpfYtlSIHrtO1538RkuDse2z8gVCtYs0FnFBRDfYPF3Krh06Ee', 'fredericmora'),
(28, 'test@test.fr', '$2y$10$9xlPJj2dvc5YGF3DLDNpWeW29Q9XoXeJnRGVFw7BvSluAvCNShBg2', 'testABC');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `BLOG_Articles`
--
ALTER TABLE `BLOG_Articles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Index pour la table `BLOG_Categories`
--
ALTER TABLE `BLOG_Categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Index pour la table `Category`
--
ALTER TABLE `Category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Product`
--
ALTER TABLE `Product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category` (`category`);

--
-- Index pour la table `ProductImage`
--
ALTER TABLE `ProductImage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Index pour la table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `BLOG_Articles`
--
ALTER TABLE `BLOG_Articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT pour la table `BLOG_Categories`
--
ALTER TABLE `BLOG_Categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `Category`
--
ALTER TABLE `Category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `Product`
--
ALTER TABLE `Product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT pour la table `ProductImage`
--
ALTER TABLE `ProductImage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT pour la table `User`
--
ALTER TABLE `User`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `BLOG_Articles`
--
ALTER TABLE `BLOG_Articles`
  ADD CONSTRAINT `BLOG_Articles_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `BLOG_Categories` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `Product`
--
ALTER TABLE `Product`
  ADD CONSTRAINT `category` FOREIGN KEY (`category`) REFERENCES `Category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `ProductImage`
--
ALTER TABLE `ProductImage`
  ADD CONSTRAINT `ProductImage_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `Product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
