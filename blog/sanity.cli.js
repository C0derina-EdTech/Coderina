import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '5tjiz4zw',
    dataset: 'production',
  },

  studio: {
    host: 'coderina-studio', // ✅ this avoids being prompted at deploy
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
