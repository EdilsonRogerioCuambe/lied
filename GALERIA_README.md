# Galeria do Grupo Lied - Documentação

## Visão Geral

A galeria do Grupo Lied foi redesenhada com um layout estilo Pinterest, focando exclusivamente nas fotos dos eventos e momentos especiais do grupo. A seção de vídeos foi separada em um componente próprio para melhor organização. O projeto agora inclui também uma seção de música com integração ao Spotify.

## Funcionalidades da Galeria

### 🖼️ Layout Pinterest
- **Disposição em colunas**: As fotos são organizadas em colunas responsivas (1-4 colunas dependendo do tamanho da tela)
- **Alturas variadas**: Cada foto tem uma altura diferente (small, medium, large, xlarge) para criar um layout dinâmico
- **Responsivo**: Adapta-se automaticamente a diferentes tamanhos de tela

### 📸 Interatividade
- **Hover effects**: Ao passar o mouse sobre as fotos, informações detalhadas aparecem
- **Modal de visualização**: Clique em qualquer foto para vê-la em tamanho maior
- **Sistema de likes**: Os usuários podem curtir as fotos
- **Botões de ação**: Compartilhar e outras ações disponíveis

### 🏷️ Informações das Fotos
Cada foto inclui:
- **Título**: Nome do evento ou momento
- **Descrição**: Breve descrição do que está acontecendo
- **Tipo de evento**: Categoria (Show ao Vivo, Ensaio, Backstage, etc.)
- **Data**: Quando o evento aconteceu
- **Contador de likes**: Número de curtidas

## Funcionalidades dos Vídeos

### 🎥 Seção Separada
- **Grid responsivo**: Vídeos organizados em grid de 2-3 colunas
- **Thumbnails**: Imagens de capa para cada vídeo
- **Duração**: Tempo de cada vídeo exibido
- **Visualizações**: Contador de visualizações
- **Links externos**: Redirecionamento para YouTube ou plataforma de vídeo

### 🎬 Interatividade dos Vídeos
- **Botão de play**: Overlay com botão de reprodução
- **Sistema de likes**: Curta seus vídeos favoritos
- **Compartilhamento**: Compartilhe vídeos nas redes sociais
- **Call-to-action**: Botão para ver o canal completo

## Estrutura dos Dados

### Interface Photo
```typescript
interface Photo {
  id: number
  src: string
  alt: string
  title: string
  description: string
  event: string
  date: string
  likes: number
  height: "small" | "medium" | "large" | "xlarge"
}
```

### Interface Video
```typescript
interface Video {
  id: number
  title: string
  description: string
  thumbnail: string
  duration: string
  views: string
  date: string
  url: string
  likes: number
}
```

## Como Adicionar Novas Fotos

1. **Adicione a foto** ao array `photos` no componente `Gallery`
2. **Configure as propriedades**:
   - `src`: URL da imagem
   - `title`: Título descritivo
   - `description`: Descrição detalhada
   - `event`: Tipo de evento
   - `date`: Data do evento
   - `height`: Tamanho da foto (small, medium, large, xlarge)

## Como Adicionar Novos Vídeos

1. **Adicione o vídeo** ao array `videos` no componente `Videos`
2. **Configure as propriedades**:
   - `thumbnail`: URL da imagem de capa
   - `title`: Título do vídeo
   - `description`: Descrição do conteúdo
   - `duration`: Duração em formato MM:SS
   - `views`: Número de visualizações
   - `url`: Link para o vídeo (YouTube, etc.)

## Responsividade

### Galeria
- **Mobile**: 1 coluna
- **Tablet**: 2 colunas
- **Desktop**: 3-4 colunas

### Vídeos
- **Mobile**: 1 coluna
- **Tablet**: 2 colunas
- **Desktop**: 3 colunas

## Estilos CSS Personalizados

O projeto inclui estilos CSS personalizados para:
- **Line clamping**: Limitação de linhas de texto
- **Smooth scrolling**: Rolagem suave para links âncora
- **Custom scrollbar**: Barra de rolagem personalizada com cores do tema

## Navegação

A galeria e vídeos estão acessíveis através do menu de navegação:
- **Galeria**: Seção de fotos estilo Pinterest
- **Vídeos**: Seção separada para clipes e performances

## Funcionalidades da Música

### 🎵 Seção Spotify
- **Player embutido**: Player oficial do Spotify integrado
- **Playlist oficial**: Lista completa das músicas do grupo
- **Lista de faixas**: Todas as músicas com controles de reprodução
- **Sistema de likes**: Curta suas músicas favoritas
- **Estatísticas**: Número de reproduções por música

### 🎧 Interatividade
- **Controles de reprodução**: Play/pause para cada música
- **Indicador visual**: Música atual em reprodução
- **Links diretos**: Redirecionamento para o Spotify
- **Call-to-action**: Botões para seguir no Spotify

## Dependências Adicionais

- **@faker-js/faker**: Geração de imagens aleatórias para demonstração

## Tecnologias Utilizadas

- **Next.js 14**: Framework React
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Estilização
- **Lucide React**: Ícones
- **CSS Columns**: Layout Pinterest
- **React Hooks**: Estado e interatividade
- **Faker.js**: Geração de dados de demonstração 