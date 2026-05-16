# SEO & Semantic Architecture Rules

## Core Principle

Сайт должен быть понятен одновременно:

* человеку,
* браузеру,
* поисковому роботу.

Любое визуальное решение не должно ломать:

* semantic structure,
* accessibility,
* crawlability,
* performance.

---

## Semantic HTML

* Использовать semantic tags вместо div-wrapper architecture где это возможно.
* Основная структура страницы:
    * header
    * nav
    * main
    * section
    * article
    * footer
* Не использовать div вместо:
    * button
    * heading
    * nav
    * form elements
* HTML должен описывать смысл блока, а не только его внешний вид.

---

## Heading Hierarchy

* На странице допускается один основной h1.
* Заголовки должны идти логично:
    * h1 → h2 → h3
* Не ломать hierarchy ради визуала.
* Не использовать headings как декоративный текст.

---

## Metadata

Каждая страница обязана иметь:

* unique title
* meta description
* canonical url
* OpenGraph metadata
* favicon
* корректный language attribute

Metadata должны генерироваться через Next.js metadata API.

---

## Robots & Sitemap

Проект обязан содержать:

* robots.txt
* sitemap.xml

Robots должны:

* разрешать индексацию нужных страниц,
* блокировать технические и приватные разделы.

Sitemap должна отражать актуальную структуру сайта.

---

## Schema / Structured Data

Использовать JSON-LD schema markup где это имеет смысл.

Базовые типы:

* Organization
* LocalBusiness
* Service
* FAQPage
* BreadcrumbList
* Article
* Product

Schema должна:

* быть валидной,
* соответствовать реальному контенту страницы,
* не содержать fake SEO data.

---

## Accessibility

Любой UI обязан оставаться доступным.

Обязательно:

* alt у изображений
* button вместо clickable div
* label у inputs
* keyboard accessibility
* корректный contrast
* aria attributes где необходимо

Accessibility является частью SEO architecture.

---

## Performance & SEO

Visual quality не должна уничтожать:

* LCP
* CLS
* INP
* mobile performance

Запрещено:

* тяжелые uncontrolled animations
* massive repaint/reflow
* layout thrashing
* unnecessary client-side rendering

Для motion использовать:

* transform
* opacity

Избегать анимации:

* left/top
* width/height
* filter
* heavy blur
* expensive shadows

---

## Images

Все изображения должны:

* быть оптимизированы,
* иметь правильные размеры,
* lazy-load где возможно,
* содержать alt text.

Избегать:

* giant uncompressed assets
* decorative 4K images без необходимости

---

## Next.js SEO Rules

Предпочитать:

* Server Components
* SSR/SSG где возможно
* минимальный client-side JS

Не превращать сайт в полностью client-rendered app без причины.

---

## Final Principle

SEO — это не manipulation.

SEO — это:

* чистая архитектура,
* понятная структура,
* техническое качество,
* высокая производительность,
* и удобный пользовательский опыт.
