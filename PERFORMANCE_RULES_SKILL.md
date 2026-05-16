# Performance Rules — Animation & Layout

* Для любых плавных анимаций, parallax, hover, mouse-follow, scroll effects и cinematic UI использовать только transform и opacity.
* Никогда не анимировать left, top, width, height, margin, padding без крайней необходимости.
* left/top использовать только для layout и реального позиционирования интерфейса, а не для continuous animation.
* Избегать тяжелых свойств в анимациях: filter, backdrop-filter, большие blur, сложные box-shadow, SVG filters.
* При создании сложного UI всегда думать о GPU compositing и минимизации repaint/reflow.
* GSAP: использовать x, y, scale, rotate, autoAlpha, а не left/top.
* Любая анимация должна восприниматься как движение готового слоя, а не перестройка layout страницы.
* При проектировании hero sections и immersive UI сначала думать о performance, потом о визуальном эффекте.
