import figma from '@figma/code-connect'
import { Button } from './Button'

figma.connect(Button, 'https://www.figma.com/design/rwbor72AYxCLnNnNOZ6hgW/Meu-portifolio?node-id=25-48', {
  example: () => (
    <Button label="Ver projetos" variant="primary" />
  ),
})
