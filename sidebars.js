module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting started',
      items: ['introduction', 'gateway', 'proxy']
    },
    {
      type: 'category',
      label: 'Libraries',
      items: ['libraries/js']
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        {
          type: 'category',
          label: 'JavaScript',
          items: [
            {
              type: 'link',
              label: 'util.js',
              href: 'https://spec-tacles.github.io/util.js/master/',
            },
            {
              type: 'link',
              label: 'rest.js',
              href: 'https://spec-tacles.github.io/rest.js/master/',
            },
          ],
        },
        {
          type: 'category',
          label: 'Go',
          items: [
            {
              type: 'link',
              label: 'broker',
              href: 'https://pkg.go.dev/github.com/spec-tacles/go/broker',
            },
            {
              type: 'link',
              label: 'rest',
              href: 'https://pkg.go.dev/github.com/spec-tacles/go/rest',
            },
            {
              type: 'link',
              label: 'types',
              href: 'https://pkg.go.dev/github.com/spec-tacles/go/types',
            },
          ],
        },
        {
          type: 'category',
          label: '.NET',
          items: [
            {
              type: 'link',
              label: 'Spectacles.NET.Gateway',
              href: 'https://spec-tacles.github.io/Spectacles.NET/master/api/Spectacles.NET.Gateway',
            },
            {
              type: 'link',
              label: 'Spectacles.NET.Broker',
              href: 'https://spec-tacles.github.io/Spectacles.NET/master/api/Spectacles.NET.Broker',
            },
            {
              type: 'link',
              label: 'Spectacles.NET.Rest',
              href: 'https://spec-tacles.github.io/Spectacles.NET/master/api/Spectacles.NET.Rest',
            },
            {
              type: 'link',
              label: 'Spectacles.NET.Types',
              href: 'https://spec-tacles.github.io/Spectacles.NET/master/api/Spectacles.NET.Types',
            },
          ],
        },
      ],
    },
  ],
};
