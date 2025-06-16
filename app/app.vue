<script setup lang="ts">
  import { Analytics } from "@vercel/analytics/nuxt";

  const colorMode = useColorMode();

  const color = computed(() =>
    colorMode.value === "dark" ? "#020618" : "white"
  );

  useHead({
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { key: "theme-color", name: "theme-color", content: color },
    ],
    link: [
      { rel: "icon", href: "/favicon.ico" },
      { rel: "canonical", href: "https://llanas.dev" },
    ],
    htmlAttrs: {
      lang: "fr",
    },
    script: [
      {
        type: "application/ld+json",

        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Boris Maurence",
          jobTitle: "Développeur freelance",
          url: "https://llanas.dev",
          image:
            "https://llanas.dev/images/boris-maurence-developpeur-perpignan.png",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Perpignan",
            addressCountry: "FR",
          },
          sameAs: [
            "https://github.com/llanas-dev",
            "https://www.linkedin.com/in/borismaurence/",
          ],
        }),
      },
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Llanas.dev",
          description:
            "Développement d'applications mobiles, SaaS et e-commerce à Perpignan.",
          url: "https://llanas.dev",
          image:
            "https://llanas.dev/images/boris-maurence-developpeur-perpignan.png",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Perpignan",
            addressCountry: "FR",
          },
          areaServed: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Perpignan",
              addressCountry: "FR",
            },
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "contact@llanas.dev",
          },
        }),
      },
    ],
  });

  useSeoMeta({
    title:
      "Développeur freelance à Perpignan - Applications mobiles, SaaS & e-commerce | llanas.dev",
    titleTemplate:
      "Développeur freelance à Perpignan - Applications mobiles, SaaS & e-commerce | Llanas.dev",
    description:
      "Développeur indépendant à Perpignan, je conçois des applications mobiles, SaaS et e-commerce sur mesure. Freelance expérimenté, disponible pour vos projets tech.",
    ogTitle: "Développeur freelance à Perpignan",
    ogDescription:
      "Développement mobile, SaaS et e-commerce pour PME et startups à Perpignan.",
    ogUrl: "https://llanas.dev",
    ogImage: "https://llanas.dev/images/boris-maurence-developpeur-perpignan.png",
    twitterCard: "summary_large_image",
  });
</script>

<template>
  <UApp>
    <NuxtLayout>
      <UMain class="relative">
        <NuxtPage />
      </UMain>
    </NuxtLayout>
    <Analytics />
  </UApp>
</template>
