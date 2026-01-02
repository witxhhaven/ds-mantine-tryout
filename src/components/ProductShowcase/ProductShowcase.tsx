import { Box, Stack, Text, Group, Image, Card } from "@mantine/core";
import { LucideIcon, ChevronRight } from "lucide-react";
import { Button } from "../Button";
import classes from "./ProductShowcase.module.css";

export interface Feature {
  icon: LucideIcon;
  text: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
}

export interface ProductShowcaseProps {
  /**
   * Product logo (SVG or image URL)
   */
  logo: React.ReactNode;
  /**
   * Main heading text
   */
  heading: string;
  /**
   * Description text
   */
  description: string;
  /**
   * CTA button text
   */
  ctaText: string;
  /**
   * CTA button link
   */
  ctaLink: string;
  /**
   * Main product image URL
   */
  mainImageUrl?: string;
  /**
   * List of features to display
   */
  features?: Feature[];
  /**
   * Testimonial data
   */
  testimonial?: Testimonial;
  /**
   * Background color
   */
  backgroundColor?: string;
}

export function ProductShowcase({
  logo,
  heading,
  description,
  ctaText,
  ctaLink,
  mainImageUrl,
  features = [],
  testimonial,
  backgroundColor = "#F9FAFB",
}: ProductShowcaseProps) {
  return (
    <Box className={classes.container} style={{ backgroundColor }}>
      <Stack gap="xl" className={classes.mainStack}>
        {/* Group 1: Content | Image */}
        <Box className={classes.group1}>
          {/* Left: Logo, Title, Description, Button */}
          <Box className={classes.contentColumn}>
            {/* Logo */}
            <Box className={classes.logoWrapper}>{logo}</Box>

            {/* Heading and Description */}
            <Stack gap="xl" mb="xl">
              <Text className={classes.heading}>{heading}</Text>
              <Text className={classes.description}>{description}</Text>
            </Stack>

            {/* CTA Button */}
            <Box className={classes.ctaWrapper}>
              <Button
                component="a"
                href={ctaLink}
                color="blue"
                size="lg"
                rightIcon={ChevronRight}
              >
                {ctaText}
              </Button>
            </Box>
          </Box>

          {/* Right: Image */}
          {mainImageUrl && (
            <Box className={classes.imageWrapper}>
              <Image
                src={mainImageUrl}
                alt={heading}
                className={classes.mainImage}
              />
            </Box>
          )}
        </Box>

        {/* Group 2: Feature Cards | Testimonial */}
        <Box className={classes.group2}>
          {/* Left: Feature Cards */}
          {features.length > 0 && (
            <Box className={classes.featuresGrid}>
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className={classes.featureCard}
                  padding="lg"
                  radius="md"
                  withBorder
                >
                  <Stack gap="sm">
                    <Box className={classes.featureIcon}>
                      <feature.icon size={24} strokeWidth={1.5} />
                    </Box>
                    <Text className={classes.featureText}>{feature.text}</Text>
                  </Stack>
                </Card>
              ))}
            </Box>
          )}

          {/* Right: Testimonial */}
          {testimonial && (
            <Box className={classes.testimonialWrapper}>
              <Stack gap="lg">
                <Text className={classes.quote}>"{testimonial.quote}"</Text>
                <Group gap="md">
                  <Image
                    src={testimonial.avatarUrl}
                    alt={testimonial.author}
                    className={classes.avatar}
                    w={48}
                    h={48}
                    radius="md"
                  />
                  <Stack gap={4}>
                    <Text className={classes.authorName}>
                      {testimonial.author}
                    </Text>
                    <Text className={classes.authorRole}>
                      {testimonial.role}
                    </Text>
                  </Stack>
                </Group>
              </Stack>
            </Box>
          )}
        </Box>
      </Stack>
    </Box>
  );
}
