import formatErrors from '../formatErrors'

export default {
  Mutation: {
      createBand: async (parent, args, { models, user }) => {
        try {
            await models.Band.create({...args, owner: user.id})
            return {
              ok: true,
              
            }
        } catch(err) {
            console.log(err)
            return {
              ok: false,
              errors: formatErrors(err)
            }
      }
    }
  }
}