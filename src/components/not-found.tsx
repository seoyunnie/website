import { Button, Center, Container, Text, Title } from "@mantine/core";
import { IconArrowBack } from "@tabler/icons-react";
import { type NotFoundRouteProps, Link } from "@tanstack/react-router";

import styles from "./not-found.module.css";

export function NotFound(_: NotFoundRouteProps) {
  return (
    <div className={styles.page}>
      <Container className={styles.inner}>
        <Center className={styles.wrapper}>
          <div className={styles.content}>
            <Title className={styles.statusCode}>404</Title>

            <Title className={styles.title}>Page Not Found</Title>

            <Text className={styles.description} size="lg">
              The page you are looking for does not exist or has been removed.
            </Text>

            <Button
              className={styles.returnButton}
              component={Link}
              leftSection={<IconArrowBack />}
              size="md"
              to="/"
              variant="white"
            >
              Return Home
            </Button>
          </div>
        </Center>
      </Container>
    </div>
  );
}
