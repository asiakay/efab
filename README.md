EFAB - EdTech | Forensics | Art | Builds
EFAB specializes in elevating everybody through technology solutions. The experienced team of content creators, developers, designers, and project managers provide tailored solutions for businesses, understanding unique needs and providing innovative solutions. Contact us today for efficient and effective services.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)


```shell
git clone https://github.com/asiakay/efab.git
```
2. Navigate to the project directory:

```shell
cd efab
```
Install the dependencies:
`npm install`

## Usage

`npm start`

## Dependencies

The following dependencies are required for this project:

- [gray-matter](https://www.npmjs.com/package/gray-matter) (Version 4.0.3)
- [next](https://www.npmjs.com/package/next) (Version 12.0.8)
- [nextra-theme-blog](https://www.npmjs.com/package/nextra-theme-blog) (Version 2.0.0-beta.5)
- [nextra](https://www.npmjs.com/package/nextra) (Version 2.0.0-beta.5)
- [react](https://www.npmjs.com/package/react) (Version 17.0.2)
- [react-dom](https://www.npmjs.com/package/react-dom) (Version 17.0.2)
- [rss](https://www.npmjs.com/package/rss) (Version 1.2.2)

These dependencies will be automatically installed when running the npm install command.

## Contributing

We welcome contributions to EFAB! To contribute to the project, please follow these guidelines:

### Code Style

- Follow the existing code style and conventions used in the project.
- Maintain consistent indentation, spacing, and naming conventions.
- Write clear and concise code with appropriate comments and documentation where necessary.

### Issue Reporting

- If you encounter any bugs, issues, or have feature requests, please [open an issue](https://github.com/your-username/your-project/issues) on the project's GitHub repository.
- Clearly describe the problem or feature request, providing as much detail as possible.
- Include steps to reproduce the issue, if applicable.
- Add relevant labels and assignees to the issue as needed.

### Pull Requests

- Before submitting a pull request, ensure that your code follows the project's code style and conventions.
- Clearly describe the purpose of the pull request and any changes made.
- Reference any related issues or pull requests.
- Submit the pull request for review, and be open to feedback and suggestions for improvement.

License
This project is licensed under the MIT License.


## Configuration for your project

1. Update your name in `theme.config.js` or change the footer.
1. Update your name and site URL for the RSS feed in `scripts/gen-rss.js`.
1. Update the meta tags in `pages/_document.js`.
1. Update the posts inside `pages/poseets/*.md` with your own content.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/nextjs-portfolio-starter&project-name=portfolio&repository-name=portfolio)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example blog my-blog
# or
yarn create next-app --example blog my-blog
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
