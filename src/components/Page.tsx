import { Container, Heading, Center } from '@chakra-ui/react'
import type { BoxProps } from '@chakra-ui/react'
import type { ReactNode } from 'react'

interface PageProps extends BoxProps {
  title?: string
  children: ReactNode
  maxWidth?: 'container.sm' | 'container.md' | 'container.lg' | 'container.xl'
}

export default function Page({ 
  title,
  children,
  maxWidth = 'container.xl',
  ...boxProps
}: PageProps) {
  return (
    <Center >
      <Container as="main" width='6xl' maxW={maxWidth} {...boxProps}>
        {title && (
          <Heading as="h1" mb={6} textAlign="center">
            {title}
          </Heading>
        )}
        {children}
      </Container>
    </Center>
  )
}