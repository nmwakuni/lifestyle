# LifeStyle Blog - Beautiful Next.js Lifestyle Blog

A modern, feature-rich lifestyle blog built with Next.js 14+, TypeScript, and the latest web technologies. This blog includes a stunning frontend, a powerful admin dashboard, and all the tools you need to create, manage, and publish engaging content.

## Features

### Frontend
- **Beautiful Design**: Modern, responsive UI with dark/light theme support
- **Framer Motion Animations**: Smooth, engaging animations throughout
- **Optimized Images**: Next.js Image optimization for fast loading
- **SEO Friendly**: Built-in SEO optimization with metadata
- **Mobile Responsive**: Fully responsive design for all devices
- **Blog Post Pages**: Individual post pages with rich content display
- **Categories & Tags**: Organized content browsing
- **Newsletter Signup**: Email subscription CTA

### Admin Dashboard
- **Rich Text Editor**: Tiptap editor with full formatting capabilities
  - Bold, italic, strikethrough, code formatting
  - Headings (H1, H2, H3)
  - Lists (ordered & unordered)
  - Blockquotes
  - Links and images
  - Undo/Redo
- **Post Management**: Create, edit, and delete blog posts
- **Draft & Publish**: Save drafts or publish immediately
- **Featured Posts**: Mark posts as featured
- **Cover Images**: Upload and manage post cover images
- **Categories & Tags**: Organize content
- **Dashboard Analytics**: View post statistics and performance
- **Dark/Light Theme**: Theme toggle in admin panel

### Technical Features
- **TypeScript**: Full type safety
- **Supabase**: PostgreSQL database with real-time capabilities
- **Drizzle ORM**: Type-safe database queries
- **Zod Validation**: Schema validation for forms
- **PostHog Analytics**: Privacy-friendly analytics
- **Authentication**: Supabase Auth integration
- **Docker Support**: Containerization ready
- **ESLint & Prettier**: Code formatting and linting

## Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Rich Text Editor**: [Tiptap](https://tiptap.dev/)
- **Database**: [Supabase](https://supabase.com/) (PostgreSQL)
- **ORM**: [Drizzle](https://orm.drizzle.team/)
- **Validation**: [Zod](https://zod.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Analytics**: [PostHog](https://posthog.com/)
- **Containerization**: Docker & Docker Compose

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Supabase account and project
- (Optional) PostHog account for analytics
- (Optional) Docker for containerization

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd lifestyle
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

   Fill in your environment variables:
   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

   # Database URL for Drizzle (use connection pooler URL from Supabase)
   DATABASE_URL=your_supabase_database_connection_string

   # PostHog Analytics (Optional)
   NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
   NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

   # Application
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Set up the database**

   Generate database migrations:
   ```bash
   npm run db:generate
   ```

   Push the schema to your database:
   ```bash
   npm run db:push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations
- `npm run db:push` - Push schema changes to database
- `npm run db:studio` - Open Drizzle Studio
- `npm run docker:build` - Build Docker image
- `npm run docker:run` - Run with Docker Compose
- `npm run docker:stop` - Stop Docker containers

## Database Setup

### Using Supabase

1. Create a new project on [Supabase](https://supabase.com/)
2. Get your project URL and anon key from Project Settings > API
3. Get your database connection string from Project Settings > Database
4. Update your `.env.local` file with these credentials
5. Run `npm run db:push` to create the database tables

### Database Schema

The application includes the following tables:
- **users**: User accounts and profiles
- **posts**: Blog posts with content, metadata, and status
- **categories**: Post categories
- **tags**: Post tags
- **post_tags**: Many-to-many relationship between posts and tags

## Docker Deployment

### Build and Run with Docker Compose

```bash
# Build the image
npm run docker:build

# Start the container
npm run docker:run

# Stop the container
npm run docker:stop
```

### Manual Docker Commands

```bash
# Build the image
docker build -t lifestyle-blog .

# Run the container
docker run -p 3000:3000 --env-file .env.local lifestyle-blog
```

## Project Structure

```
lifestyle/
├── app/                      # Next.js app directory
│   ├── admin/               # Admin dashboard pages
│   │   ├── posts/          # Post management
│   │   ├── categories/     # Category management
│   │   ├── tags/           # Tag management
│   │   └── layout.tsx      # Admin layout
│   ├── blog/               # Blog pages
│   │   └── [slug]/         # Individual post pages
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/             # React components
│   ├── admin/             # Admin-specific components
│   │   ├── sidebar.tsx    # Admin sidebar
│   │   └── tiptap-editor.tsx  # Rich text editor
│   ├── providers/         # Context providers
│   ├── ui/                # shadcn/ui components
│   ├── header.tsx         # Site header
│   ├── footer.tsx         # Site footer
│   └── theme-toggle.tsx   # Theme switcher
├── lib/                   # Utility functions
│   ├── db/               # Database configuration
│   │   ├── schema.ts     # Drizzle schema
│   │   └── index.ts      # Database client
│   ├── supabase/         # Supabase clients
│   ├── validations/      # Zod schemas
│   └── utils.ts          # Helper functions
├── public/               # Static assets
├── .env.example          # Environment variables template
├── drizzle.config.ts     # Drizzle configuration
├── middleware.ts         # Next.js middleware
├── tailwind.config.ts    # Tailwind configuration
└── docker-compose.yml    # Docker Compose configuration
```

## Customization

### Changing Colors

Edit the CSS variables in `app/globals.css` to customize the color scheme:

```css
:root {
  --primary: 0 0% 9%;
  --secondary: 0 0% 96.1%;
  /* ... other variables */
}
```

### Adding New Pages

Create new pages in the `app/` directory following Next.js App Router conventions.

### Extending the Database Schema

1. Edit `lib/db/schema.ts` to add new tables or columns
2. Run `npm run db:generate` to create a migration
3. Run `npm run db:push` to apply changes

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help or have questions:
- Open an issue on GitHub
- Check the [Next.js Documentation](https://nextjs.org/docs)
- Check the [Supabase Documentation](https://supabase.com/docs)

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Fonts from [Vercel](https://vercel.com/font)
