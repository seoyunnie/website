import { Button, Center, Container, Text, Title } from "@mantine/core";
import { IconArrowBack } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

import styles from "./not-found.module.css";

export function NotFound() {
  return (
    <div className={styles.background}>
      <Container h="100%">
        <Center h="100%">
          <div className={styles.content}>
            <Title className={styles.statusCode}>404</Title>

            <div>
              <Title className={styles.title}>Page Not Found</Title>
              <Text className={styles.description} size="lg">
                The page you are looking for does not exist or has been removed.
              </Text>
            </div>

            <Button
              className={styles.returnButton}
              variant="white"
              size="md"
              leftSection={<IconArrowBack />}
              component={Link}
              to="/"
            >
              Return Home
            </Button>
          </div>
        </Center>
      </Container>
    </div>
  );
}
