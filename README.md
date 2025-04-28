## Système de gestion de bibliothèque

il s'agit du developpement d'une application pour un système de gestion de livres pour une bibliothèque, avec un back-end NestJS et un front-end React/Next.js, le tout reposant sur SQLite.

### Objectifs
  
- Concevoir un back-end modulaire (NestJS) et un front-end organisé (React + Next.js)  
- Mettre en place l’ensemble des fonctionnalités de gestion de livres et d’auteurs  
- Appliquer rigueur et propreté de code (ESLint, typage exhaustif, programmation fonctionnelle)  
- Travailler en groupe (4 personnes) en assurant une photo-journalisation claire via Git  

### Fonctionnalités à implémenter

#### Navigation & Layout
- Menu de navigation global (Accueil, Livres, Auteurs)  
- Titre homogène sur chaque page  
- Fil d’Ariane sur toutes les pages enfants  

#### Gestion des livres (`/books`)
- **Liste** : titre, date de publication, auteur, note moyenne (après implémentation des avis)  
- **Recherche** : filtrage par titre en temps réel  
- **Tri** : par titre, date, note  
- **Ajout** : modal de création (titre, date, auteur)  
- **Détail** (`/books/:id`) :  
  - Affichage : titre, prix, année, auteur (lien vers la page auteur)  
  - Suppression : modal de confirmation  
  - **Avis** : drawer listant les avis (1–5 étoiles, commentaire optionnel), triable par date  

#### Gestion des auteurs (`/authors`)
- **Liste** : nom, photo, nombre de livres, moyenne pondérée des avis  
- **Recherche** : filtrage par nom  
- **Ajout** : modal de création (nom, photo, biographie)  
- **Détail** (`/authors/:id`) :  
  - Affichage : nom, photo, biographie, liste des livres (liens vers leurs détails)  
  - Modification des informations  
  - Création/suppression de livres associés  
  - Suppression de l’auteur : modal de confirmation  

### Architecture & Organisation

#### Back-end (NestJS)
- **controller** : gestion des routes HTTP  
- **service** : logique métier  
- **repository** : accès à la base SQLite (TypeORM/Prisma)  
- **DTO** : validation et typage des requêtes  
- **presenter** : formatage des réponses  
- **models** : définitions de schémas et entités  

#### Front-end (React + Next.js)
- **pages** : routes Next.js  
- **providers** : contextes et hooks métiers  
- **components** : UI réutilisables (BaseButton, Modal, Input…)  
- **models** : interfaces TypeScript  
- **styles** : Tailwind CSS pour le design system  

### Technologies principales
- **Langages :** TypeScript, JavaScript, Python (scripts)  
- **Back-end :** NestJS, SQLite, TypeORM ou Prisma  
- **Front-end :** React, Next.js, Tailwind CSS  
- **Outils :** Docker, Docker Compose, GitLab CI/CD  
- **Tests :** Jest, Testing Library, Supertest  

