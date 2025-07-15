import { Box, Text } from '@radix-ui/themes'

export function TopBar() {
  return (
    <Box
      asChild
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        zIndex: 100,
        background: 'var(--color-panel-solid)',
        boxShadow: '0 2px 8px #0002',
        padding: '0.75rem 0',
        textAlign: 'center'
      }}
    >
      <header>
        <Text as="span" size="5" weight="bold" color="indigo">
          Fatty Food Diary
        </Text>
      </header>
    </Box>
  )
}