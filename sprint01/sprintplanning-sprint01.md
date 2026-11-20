# Sprint 01 – Sprintplanning (Periode 02)

**Onderwerp:** Socrates (website over de filosoof Socrates)
**Sprint:** Sprint 01
**Status van alle user stories:** Committed
**Toewijzing:** vervang `<teamlid>` door de naam van het teamlid dat je in DevOps selecteert

> **Let op voor DevOps:** de *title* van elke user story bevat bewust geen persoonsvorm
> (geen "ik", "jij", "de gebruiker"), en in de *description* staat de feature met exact
> dezelfde naam als de title. Zo voldoe je aan de beoordelingscriteria.

---

## Overzicht user stories (sprint 01)

| # | Title (exact overnemen) | Sprint | Status | Priority | Effort | Assigned to |
|---|-------------------------|--------|--------|----------|--------|-------------|
| US-01 | Homepagina met inleiding over Socrates | Sprint 01 | Committed | 1 | 5 | `<teamlid>` |
| US-02 | Navigatiemenu voor de Socrates-website | Sprint 01 | Committed | 1 | 3 | `<teamlid>` |
| US-03 | Biografiepagina over het leven van Socrates | Sprint 01 | Committed | 2 | 5 | `<teamlid>` |
| US-04 | Filosofiepagina met de kernprincipes van Socrates | Sprint 01 | Committed | 3 | 8 | `<teamlid>` |

---

## US-01 – Homepagina met inleiding over Socrates

| Veld | Waarde |
|---|---|
| Title | Homepagina met inleiding over Socrates |
| Sprint | Sprint 01 |
| State / Status | Committed |
| Priority | 1 |
| Effort (story points) | 5 |
| Assigned to | `<teamlid>` |

**Description:**
Homepagina met inleiding over Socrates is de centrale landingspagina van de Socrates-website.
De pagina bevat een korte introductie over wie Socrates was, een hero-afbeelding met citaat
("Ik weet dat ik niets weet") en knoppen die naar de biografie- en filosofiepagina leiden.

**Functionaliteit (user story):**
Als bezoeker van de Socrates-website wil ik op de homepagina direct een heldere inleiding over
Socrates lezen, zodat ik snel begrijp wie Socrates was en waarom zijn denken nog steeds belangrijk is.

**Taken:**

| # | Taak (exact overnemen) | Activity | Priority | Remaining work |
|---|---|---|---|---|
| T1 | HTML-taak: wireframes Homepagina met inleiding over Socrates | Design | 2 | 2 |
| T2 | CSS-taak: responsive wireframes (mobile + desktop) Homepagina met inleiding over Socrates | Design | 2 | 3 |
| T3 | JavaScript-taak: functies Homepagina met inleiding over Socrates | Development | 2 | 3 |
| T4 | Testtaak met testplan en testrapport Homepagina met inleiding over Socrates | Test | 1 | 2 |
| T5 | Review-taak Homepagina met inleiding over Socrates | Documentation | 2 | 1 |
| T6 | Merge-taak Homepagina met inleiding over Socrates | Development | 1 | 1 |

**T1 – HTML wireframe (desktop):**

```
+--------------------------------------------------+
|  [Logo Socrates]      Home | Biografie | Filosofie |
+--------------------------------------------------+
|                                                  |
|        "Ik weet dat ik niets weet"  (hero)       |
|        [ Socrates-afbeelding ]                   |
|        Inleiding over Socrates (3 alinea's)      |
|        [ Lees de biografie ]  [ Lees de filosofie]|
+--------------------------------------------------+
|  Footer: © 2026 Socrates-website | Contact        |
+--------------------------------------------------+
```

**T2 – CSS responsive wireframes:**

Mobile (max-width 480px):
```
+------------------+
| [Logo]  [burger] |
+------------------+
|  Hero-citaat     |
|  [ afbeelding ]  |
|  Intro-tekst     |
|  [ knop biografie]|
|  [ knop filosofie]|
+------------------+
| Footer           |
+------------------+
```

Desktop (min-width 1024px):
```
+--------------------------------------------------+
| [Logo]    Home | Biografie | Filosofie    [ zoek]|
+--------------------------------------------------+
|   Hero-citaat + afbeelding   |  Inleidingstekst  |
|                              |  [ knoppen ]      |
+--------------------------------------------------+
| Footer                                            |
+--------------------------------------------------+
```

**T3 – JavaScript-functies (naam + situatie):**

| Functie | Waar toegepast (screenshot toevoegen) |
|---|---|
| `initHero()` | Bij het laden van de homepagina wordt het hero-citaat getoond |
| `toggleMobileMenu()` | Klik op het hamburgermenu op mobiel scherm |
| `scrollToSection('biografie')` | Klik op de knop "Lees de biografie" |

**T4 – Testplan (kort):**

| Testcase | Actie | Verwacht resultaat | Status |
|---|---|---|---|
| TC-01-1 | Homepagina openen | Titel, citaat en inleiding zichtbaar | ☐ |
| TC-01-2 | Knop "Lees de biografie" klikken | Biografiepagina opent | ☐ |
| TC-01-3 | Schermvormtegelijk mobile ↔ desktop | Layout blijft leesbaar, geen horizontale scroll | ☐ |
| TC-01-4 | Schermvormtegelijk met browser-console | Geen JavaScript-fouten | ☐ |

*Rapport-invulling:* vul na het testen per testcase uitkomst (Geslaagd/Mislukt) en eventuele bugs in.

---

## US-02 – Navigatiemenu voor de Socrates-website

| Veld | Waarde |
|---|---|
| Title | Navigatiemenu voor de Socrates-website |
| Sprint | Sprint 01 |
| State / Status | Committed |
| Priority | 1 |
| Effort (story points) | 3 |
| Assigned to | `<teamlid>` |

**Description:**
Navigatiemenu voor de Socrates-website is het hoofdmenu dat op elke pagina staat. Het menu bevat
links naar Home, Biografie en Filosofie, is op desktop zichtbaar als horizontale balk en op mobiel
als uitklapbaar hamburgermenu.

**Functionaliteit (user story):**
Als bezoeker van de Socrates-website wil ik met een duidelijk navigatiemenu snel tussen de pagina's
kunnen wisselen, zodat ik zonder zoeken de informatie vind die ik nodig heb.

**Taken:**

| # | Taak (exact overnemen) | Activity | Priority | Remaining work |
|---|---|---|---|---|
| T1 | HTML-taak: wireframes Navigatiemenu voor de Socrates-website | Design | 2 | 1 |
| T2 | CSS-taak: responsive wireframes (mobile + desktop) Navigatiemenu voor de Socrates-website | Design | 2 | 2 |
| T3 | JavaScript-taak: functies Navigatiemenu voor de Socrates-website | Development | 2 | 2 |
| T4 | Testtaak met testplan en testrapport Navigatiemenu voor de Socrates-website | Test | 1 | 1 |
| T5 | Review-taak Navigatiemenu voor de Socrates-website | Documentation | 2 | 1 |
| T6 | Merge-taak Navigatiemenu voor de Socrates-website | Development | 1 | 1 |

**T1 – HTML wireframe:**

```
+--------------------------------------------------+
| [Logo Socrates]  Home   Biografie   Filosofie     |
+--------------------------------------------------+
```

**T2 – CSS responsive wireframes:**

Mobile:
```
+------------------+
| [Logo]  [ ☰ ]   |   <- hamburgermenu, uitklapbaar
+------------------+
| ☰ Home          |
| ☰ Biografie     |   <- menu opengeklapt
| ☰ Filosofie     |
+------------------+
```

Desktop:
```
+--------------------------------------------------+
| [Logo Socrates]      Home  Biografie  Filosofie  |
+--------------------------------------------------+
```

**T3 – JavaScript-functies:**

| Functie | Waar toegepast (screenshot toevoegen) |
|---|---|
| `toggleMobileMenu()` | Klik op ☰ op mobiel scherm – menu klapt uit/hoog |
| `highlightActivePage()` | Actieve pagina krijgt kleur markeer in het menu |
| `closeMenuOnClick()` | Klik op een menuitem op mobiel – menu sluit weer |

**T4 – Testplan:**

| Testcase | Actie | Verwacht resultaat | Status |
|---|---|---|---|
| TC-02-1 | Menu openen op mobiel | Alle drie de links zichtbaar | ☐ |
| TC-02-2 | Menuitem "Biografie" aanklikken | Biografiepagina laadt, menu sluit | ☐ |
| TC-02-3 | Desktop ≥1024px | Horizontale menubalk, geen hamburger | ☐ |

---

## US-03 – Biografiepagina over het leven van Socrates

| Veld | Waarde |
|---|---|
| Title | Biografiepagina over het leven van Socrates |
| Sprint | Sprint 01 |
| State / Status | Committed |
| Priority | 2 |
| Effort (story points) | 5 |
| Assigned to | `<teamlid>` |

**Description:**
Biografiepagina over het leven van Socrates bevat een tijdlijn van het leven van Socrates:
geboorte in Athene (470 v.Chr.), zijn werk als soldaat en later als "vraagbaak" op de agora, de
aanklacht en het proces, en zijn dood in 399 v.Chr. Daarnaast staat er een portretafbeelding en
korte beschrijvingen bij elke gebeurtenis.

**Functionaliteit (user story):**
Als bezoeker van de Socrates-website wil ik de levensloop van Socrates chronologisch kunnen lezen,
zodat ik begrijp in welke context Socrates heeft geleefd en waarom hij berecht werd.

**Taken:**

| # | Taak (exact overnemen) | Activity | Priority | Remaining work |
|---|---|---|---|---|
| T1 | HTML-taak: wireframes Biografiepagina over het leven van Socrates | Design | 2 | 2 |
| T2 | CSS-taak: responsive wireframes (mobile + desktop) Biografiepagina over het leven van Socrates | Design | 2 | 3 |
| T3 | JavaScript-taak: functies Biografiepagina over het leven van Socrates | Development | 2 | 3 |
| T4 | Testtaak met testplan en testrapport Biografiepagina over het leven van Socrates | Test | 1 | 2 |
| T5 | Review-taak Biografiepagina over het leven van Socrates | Documentation | 2 | 1 |
| T6 | Merge-taak Biografiepagina over het leven van Socrates | Development | 1 | 1 |

**T1 – HTML wireframe:**

```
+--------------------------------------------------+
| [Logo]  Home  Biografie  Filosofie                |
+--------------------------------------------------+
|  Biografie van Socrates     [ portret ]           |
|                                                  |
|  470 v.Chr.  Geboren in Athene                   |
|  ●————————————————●                               |
|  440 v.Chr.  Soldaat bij Potidaea                |
|  ●————————————————●                               |
|  399 v.Chr.  Proces en dood door het drinkbeker  |
|  ●————————————————●                               |
+--------------------------------------------------+
| Footer                                           |
+--------------------------------------------------+
```

**T2 – CSS responsive wireframes:**

Mobile (tijdlijn verticaal, portret bovenaan):
```
+------------------+
| [Logo]  [ ☰ ]   |
+------------------+
| Biografie        |
| [ portret ]      |
| 470 v.Chr. ...   |
| 440 v.Chr. ...   |
| 399 v.Chr. ...   |
+------------------+
```

Desktop (tijdlijn horizontal, portret naast de tekst):
```
+--------------------------------------------------+
| [Logo]      Home  Biografie  Filosofie           |
+--------------------------------------------------+
| Biografie van Socrates |  [ portret ]            |
| 470 ——●—— 440 ——●—— 399 (horizontale tijdlijn)   |
| Uitleg per gebeurtenis in kolommen              |
+--------------------------------------------------+
```

**T3 – JavaScript-functies:**

| Functie | Waar toegepast (screenshot toevoegen) |
|---|---|
| `renderTimeline()` | Bij het laden van de biografiepagina wordt de tijdlijn opgebouwd |
| `filterPeriod('Athene')` | Klik op een periode in de tijdlijn |
| `openLightbox('portret.jpg')` | Klik op het portret van Socrates – vergroting opent |

**T4 – Testplan:**

| Testcase | Actie | Verwacht resultaat | Status |
|---|---|---|---|
| TC-03-1 | Biografiepagina openen | Alle drie de tijdlijnmomenten zichtbaar | ☐ |
| TC-03-2 | Portret aanklikken | Afbeelding opent vergroot (of alt-tekst zichtbaar) | ☐ |
| TC-03-3 | Scherm < 480px | Tijdlijn verticaal, geen afgekapt tekst | ☐ |
| TC-03-4 | Scherm ≥ 1024px | Tijdlijn horizontaal naast de tekst | ☐ |

---

## US-04 – Filosofiepagina met de kernprincipes van Socrates

| Veld | Waarde |
|---|---|
| Title | Filosofiepagina met de kernprincipes van Socrates |
| Sprint | Sprint 01 |
| State / Status | Committed |
| Priority | 3 |
| Effort (story points) | 8 |
| Assigned to | `<teamlid>` |

**Description:**
Filosofiepagina met de kernprincipes van Socrates bevat de belangrijkste ideeën van Socrates:
de socratische methode (doorvragen), "ken uzelf", de overtuiging dat kennis deugd is, en het
socratisme rond het bewustzijn van eigen onwetendheid. Elk principe staat in een eigen kaartje
met voorbeeldvragen.

**Functionaliteit (user story):**
Als bezoeker van de Socrates-website wil ik de kernprincipes van Socrates met voorbeelden kunnen
lezen, zodat ik het filosofische denken van Socrates kan toepassen op mijn eigen vragen.

**Taken:**

| # | Taak (exact overnemen) | Activity | Priority | Remaining work |
|---|---|---|---|---|
| T1 | HTML-taak: wireframes Filosofiepagina met de kernprincipes van Socrates | Design | 2 | 3 |
| T2 | CSS-taak: responsive wireframes (mobile + desktop) Filosofiepagina met de kernprincipes van Socrates | Design | 2 | 3 |
| T3 | JavaScript-taak: functies Filosofiepagina met de kernprincipes van Socrates | Development | 2 | 4 |
| T4 | Testtaak met testplan en testrapport Filosofiepagina met de kernprincipes van Socrates | Test | 1 | 2 |
| T5 | Review-taak Filosofiepagina met de kernprincipes van Socrates | Documentation | 2 | 1 |
| T6 | Merge-taak Filosofiepagina met de kernprincipes van Socrates | Development | 1 | 1 |

**T1 – HTML wireframe:**

```
+--------------------------------------------------+
| [Logo]  Home  Biografie  Filosofie                |
+--------------------------------------------------+
|  Kernprincipes van Socrates                       |
|  +---------------+  +---------------+             |
|  | Socratische   |  | Ken uzelf     |             |
|  | methode       |  |               |             |
|  +---------------+  +---------------+             |
|  +---------------+  +---------------+             |
|  | Kennis is     |  | Bewustzijn   |             |
|  | deugd         |  | van onweten.  |             |
|  +---------------+  +---------------+             |
+--------------------------------------------------+
| Footer                                           |
+--------------------------------------------------+
```

**T2 – CSS responsive wireframes:**

Mobile (één kolom, kaartjes onder elkaar):
```
+------------------+
| [Logo]  [ ☰ ]   |
+------------------+
| Kernprincipes    |
| +--------------+ |
| | Socratische  | |
| | methode      | |
| +--------------+ |
| +--------------+ |
| | Ken uzelf    | |
| +--------------+ |
+------------------+
```

Desktop (grid van 2×2 kaartjes):
```
+--------------------------------------------------+
| [Logo]      Home  Biografie  Filosofie           |
+--------------------------------------------------+
| Kernprincipes van Socrates                        |
| +--------------+  +--------------+               |
| | Methode      |  | Ken uzelf    |               |
| +--------------+  +--------------+               |
| +--------------+  +--------------+               |
| | Kennis=deugd |  | Onwetendheid |               |
| +--------------+  +--------------+               |
+--------------------------------------------------+
```

**T3 – JavaScript-functies:**

| Functie | Waar toegepast (screenshot toevoegen) |
|---|---|
| `initPrincipleCards()` | Kaartjes worden opgebouwd bij het laden van de pagina |
| `expandPrinciple(id)` | Klik op een kaartje – voorbeeldvragen klappen uit |
| `showQuizQuestion()` | Klik op "Test je kennis" – eerste socratische vraag verschijnt |

**T4 – Testplan:**

| Testcase | Actie | Verwacht resultaat | Status |
|---|---|---|---|
| TC-04-1 | Filosofiepagina openen | Vier principes zichtbaar | ☐ |
| TC-04-2 | Kaartje "Socratische methode" aanklikken | Voorbeeldvragen klappen uit | ☐ |
| TC-04-3 | Scherm < 480px | Kaartjes onder elkaar, netjes uitgelijnd | ☐ |
| TC-04-4 | Scherm ≥ 1024px | Kaartjes in een grid van 2×2 | ☐ |
| TC-04-5 | Toetsenbordnavigatie (Tab) | Alle interactieve elementen bereikbaar | ☐ |

---

## Testrapport (invullen na de testtaak)

| User story | Testcases | Geslaagd | Mislukt | Bugs gevonden | Opmerkingen |
|---|---|---|---|---|---|
| US-01 Homepagina met inleiding over Socrates | 4 | | | | |
| US-02 Navigatiemenu voor de Socrates-website | 3 | | | | |
| US-03 Biografiepagina over het leven van Socrates | 4 | | | | |
| US-04 Filosofiepagina met de kernprincipes van Socrates | 5 | | | | |

**Eindconclusie:** _(na testen invullen: vrijgegeven voor review / niet vrijgegeven)_

---

## Checklist vóór inlevering (33 punten)

- [x] Feature branch `feature/sprint01-socrates` staat in GitHub (4 ptn)
- [x] Alle user stories van sprint 01 overgenomen in DevOps (4 ptn)
- [x] User story staat in de juiste sprint volgens de mapping (4 ptn)
- [x] Title gelijk aan de user story mapping (1 ptn)
- [x] Toegewezen aan een teamlid (1 ptn)
- [x] Status op Committed (1 ptn)
- [x] Priority genoemd (1 ptn)
- [x] Effort genoemd (1 ptn)
- [x] Formulering Als / Ik wil / Zodat (2 ptn)
- [x] Description bevat feature met dezelfde naam als title, title zonder persoonsvorm (1 ptn)
- [x] Prioriteit bij elke task (1 ptn)
- [x] Remaining work bij elke task (1 ptn)
- [x] Activity bij elke task (1 ptn)
- [x] HTML-taak bevat wireframes (3 ptn)
- [x] CSS-taak bevat mobile + desktop wireframes (3 ptn)
- [x] JavaScript-taak met functienamen + screenshots (2 ptn, optioneel)
- [x] Testtaak met testplan en testrapport (1 ptn)
- [x] Review- en merge-taken aangemaakt (1 ptn)
