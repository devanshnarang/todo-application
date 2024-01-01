export default {
  world: (request, response) => {
    response.status(200).json({hello: 'world'});
  },
  name: (request, response) => {
    response.status(200).json({hello: request.params.name});
  },
};
