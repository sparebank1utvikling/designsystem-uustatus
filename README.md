# Test av universell utforming for komponentene i designsystemet

## Åpent tilgjengelig

Testene vi gjør av universell utforming i komponentene våre er åpent tilgjengelig for alle. Vi satser på deling og innspill for å gjøre testprosessen så god som mulig!

Testfilene ligger i dette åpne repoet på GitHub. På [design.sparebank1.no](https://design.sparebank1.no) finnes en oppsummering av testresultatene for hver enkelt komponent og link til testfilene på GitHub for de som vil se flere detaljer.

## Omfang

I første omgang dekker testene de norske lovkravene til universell utforming. På sikt vil vi legge til flere og flere relevante tester som går ut over lovkravene. Vi tester også komponentene i forhold til andre retningslinjer enn bare lovkravene, men det er ikke en del av dokumentasjonen på GitHub og [design.sparebank1.no](https://design.sparebank1.no) riktig enda.

Eksempler på krav som gjerne testes, men som foreløpig ikke er en med i dokumentasjonen:
- [WCAG 2.1, 1.4.11 Kontrast for ikke-tekstlig innhold (Nivå AA)](https://www.uutilsynet.no/wcag-standarden/1411-kontrast-ikke-tekstlig-innhold-niva-aa/145)
- [WCAG 2.1, 2.5.5 Target Size (Level AAA)](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [WCAG 2.1, 1.4.6 Contrast (Enhanced) (Level AAA)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html)

Vi tester med et utvalg enheter, operativsystemer, nettlesere, skjermlesere og lignende. Målet er å utvide dette utvalget mer og mer.

## Metode

Testmetodene baserer seg blant annet på [uutilsynets testprosedyrer for å måle universell utforming](https://www.uutilsynet.no/regelverk/testprosedyrar-nettstader/709).

## Automatiske tester på sikt

Alle testene er nå manuelle. Vi ser på muligheten for å komplimentere eller erstatte en del av dem med automatiske tester.

## Prosess

Vi tester komponentene i grensesnittet component overview og dokumenterer resultatene i testfilene på GitHub. Fra testfilene genererer vi en oppsummering som publiseres på [design.sparebank1.no](https://design.sparebank1.no).

På sikt ser vi for oss et enda enklere grensesnitt for å dokumentere testresultatene, så flest mulig kan bidra i testingen.

## Steg for steg
- Finn komponenten som skal testes, i component overview
- Lag ny branch i dette GitHub-repoet (designsystem-uustatus)
- Finn testfilen for komponenten og kravet som skal testes. For eksempel «wcag-1.1.1-ikke_tekstlig_innhold.yml» i mappen «ActionButton»
- Test komponenten (i component overview) og fyll inn resultatene i testfilen (på GitHub)
- Lag en PR så andre kan se over endringene før testen publiseres ut

## Data bak designsystem UU-status

### Build

```
npm install
npm run build
npm pack
```

### Usage

```js
import { rules, reports } from '@sb1/designsystem-uustatus',
```
