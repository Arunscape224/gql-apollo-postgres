export default {
  Mutation: {
      createBand: async (parent, args, { models, user }) => {
        try {
            await models.Band.create({...args, owner: user.id})
            return true
        } catch(err) {
            console.log(err)
            return false
      }
    }
  }
}