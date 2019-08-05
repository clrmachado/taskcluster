// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import Client from '../Client';

export default class WorkerManager extends Client {
  constructor(options = {}) {
    super({
      serviceName: 'worker-manager',
      serviceVersion: 'v1',
      exchangePrefix: '',
      ...options,
    });
    this.ping.entry = {"args":[],"category":"Ping Server","method":"get","name":"ping","query":[],"route":"/ping","stability":"stable","type":"function"}; // eslint-disable-line
    this.listProviders.entry = {"args":[],"category":"Worker Manager","method":"get","name":"listProviders","output":true,"query":["continuationToken","limit"],"route":"/providers","stability":"stable","type":"function"}; // eslint-disable-line
    this.createWorkerPool.entry = {"args":["workerPoolId"],"category":"Worker Manager","input":true,"method":"put","name":"createWorkerPool","output":true,"query":[],"route":"/worker-pool/<workerPoolId>","scopes":{"AllOf":["worker-manager:create-worker-type:<workerPoolId>","worker-manager:provider:<providerId>"]},"stability":"experimental","type":"function"}; // eslint-disable-line
    this.updateWorkerPool.entry = {"args":["workerPoolId"],"category":"Worker Manager","input":true,"method":"post","name":"updateWorkerPool","output":true,"query":[],"route":"/worker-pool/<workerPoolId>","scopes":{"AllOf":["worker-manager:update-worker-type:<workerPoolId>","worker-manager:provider:<providerId>"]},"stability":"experimental","type":"function"}; // eslint-disable-line
    this.workerPool.entry = {"args":["workerPoolId"],"category":"Worker Manager","method":"get","name":"workerPool","output":true,"query":[],"route":"/worker-pool/<workerPoolId>","stability":"experimental","type":"function"}; // eslint-disable-line
    this.listWorkerPools.entry = {"args":[],"category":"Worker Manager","method":"get","name":"listWorkerPools","output":true,"query":["continuationToken","limit"],"route":"/worker-pools","stability":"experimental","type":"function"}; // eslint-disable-line
    this.reportWorkerError.entry = {"args":["workerPoolId"],"category":"Worker Manager","input":true,"method":"post","name":"reportWorkerError","output":true,"query":[],"route":"/worker-pool-errors/<workerPoolId>","scopes":{"AllOf":["assume:worker-pool:<workerPoolId>","assume:worker-id:<workerGroup>/<workerId>"]},"stability":"experimental","type":"function"}; // eslint-disable-line
    this.listWorkerPoolErrors.entry = {"args":["workerPoolId"],"category":"Worker Manager","method":"get","name":"listWorkerPoolErrors","output":true,"query":["continuationToken","limit"],"route":"/worker-pool-errors/<workerPoolId>","stability":"experimental","type":"function"}; // eslint-disable-line
    this.listWorkersForWorkerGroup.entry = {"args":["workerPoolId","workerGroup"],"category":"Worker Manager","method":"get","name":"listWorkersForWorkerGroup","output":true,"query":["continuationToken","limit"],"route":"/workers/<workerPoolId>:/<workerGroup>","stability":"experimental","type":"function"}; // eslint-disable-line
    this.worker.entry = {"args":["workerPoolId","workerGroup","workerId"],"category":"Worker Manager","method":"get","name":"worker","output":true,"query":[],"route":"/workers/<workerPoolId>:/<workerGroup>/<workerId>","stability":"experimental","type":"function"}; // eslint-disable-line
    this.createWorker.entry = {"args":["workerPoolId","workerGroup","workerId"],"category":"Worker Manager","input":true,"method":"put","name":"createWorker","output":true,"query":[],"route":"/workers/<workerPoolId>:/<workerGroup>/<workerId>","scopes":"worker-manager:create-worker:<workerPoolId>/<workerGroup>/<workerId>","stability":"experimental","type":"function"}; // eslint-disable-line
    this.removeWorker.entry = {"args":["workerPoolId","workerGroup","workerId"],"category":"Worker Manager","method":"delete","name":"removeWorker","query":[],"route":"/workers/<workerPoolId>:/<workerGroup>/<workerId>","scopes":"worker-manager:remove-worker:<workerPoolId>/<workerGroup>/<workerId>","stability":"experimental","type":"function"}; // eslint-disable-line
    this.listWorkersForWorkerPool.entry = {"args":["workerPoolId"],"category":"Worker Manager","method":"get","name":"listWorkersForWorkerPool","output":true,"query":["continuationToken","limit"],"route":"/workers/<workerPoolId>","stability":"experimental","type":"function"}; // eslint-disable-line
    this.registerWorker.entry = {"args":[],"category":"Worker Manager","input":true,"method":"post","name":"registerWorker","output":true,"query":[],"route":"/worker/register","stability":"experimental","type":"function"}; // eslint-disable-line
  }
  /* eslint-disable max-len */
  // Respond without doing anything.
  // This endpoint is used to check that the service is up.
  /* eslint-enable max-len */
  ping(...args) {
    this.validate(this.ping.entry, args);

    return this.request(this.ping.entry, args);
  }
  /* eslint-disable max-len */
  // Retrieve a list of providers that are available for worker pools.
  /* eslint-enable max-len */
  listProviders(...args) {
    this.validate(this.listProviders.entry, args);

    return this.request(this.listProviders.entry, args);
  }
  /* eslint-disable max-len */
  // Create a new worker pool. If the worker pool already exists, this will throw an error.
  /* eslint-enable max-len */
  createWorkerPool(...args) {
    this.validate(this.createWorkerPool.entry, args);

    return this.request(this.createWorkerPool.entry, args);
  }
  /* eslint-disable max-len */
  // Given an existing worker pool definition, this will modify it and return
  // the new definition.
  // To delete a worker pool, set its `providerId` to `"null-provider"`.
  // After any existing workers have exited, a cleanup job will remove the
  // worker pool.  During that time, the worker pool can be updated again, such
  // as to set its `providerId` to a real provider.
  /* eslint-enable max-len */
  updateWorkerPool(...args) {
    this.validate(this.updateWorkerPool.entry, args);

    return this.request(this.updateWorkerPool.entry, args);
  }
  /* eslint-disable max-len */
  // Fetch an existing worker pool defition.
  /* eslint-enable max-len */
  workerPool(...args) {
    this.validate(this.workerPool.entry, args);

    return this.request(this.workerPool.entry, args);
  }
  /* eslint-disable max-len */
  // Get the list of all the existing worker pools.
  /* eslint-enable max-len */
  listWorkerPools(...args) {
    this.validate(this.listWorkerPools.entry, args);

    return this.request(this.listWorkerPools.entry, args);
  }
  /* eslint-disable max-len */
  // Report an error that occurred on a worker.  This error will be included
  // with the other errors in `listWorkerPoolErrors(workerPoolId)`.
  // Workers can use this endpoint to report startup or configuration errors
  // that might be associated with the worker pool configuration and thus of
  // interest to a worker-pool administrator.
  // NOTE: errors are publicly visible.  Ensure that none of the content
  // contains secrets or other sensitive information.
  /* eslint-enable max-len */
  reportWorkerError(...args) {
    this.validate(this.reportWorkerError.entry, args);

    return this.request(this.reportWorkerError.entry, args);
  }
  /* eslint-disable max-len */
  // Get the list of worker pool errors.
  /* eslint-enable max-len */
  listWorkerPoolErrors(...args) {
    this.validate(this.listWorkerPoolErrors.entry, args);

    return this.request(this.listWorkerPoolErrors.entry, args);
  }
  /* eslint-disable max-len */
  // Get the list of all the existing workers in a given group in a given worker pool.
  /* eslint-enable max-len */
  listWorkersForWorkerGroup(...args) {
    this.validate(this.listWorkersForWorkerGroup.entry, args);

    return this.request(this.listWorkersForWorkerGroup.entry, args);
  }
  /* eslint-disable max-len */
  // Get a single worker.
  /* eslint-enable max-len */
  worker(...args) {
    this.validate(this.worker.entry, args);

    return this.request(this.worker.entry, args);
  }
  /* eslint-disable max-len */
  // Create a new worker.  The precise behavior of this method depends
  // on the provider implementing the given worker pool.  Some providers
  // do not support creating workers at all, and will return a 400 error.
  /* eslint-enable max-len */
  createWorker(...args) {
    this.validate(this.createWorker.entry, args);

    return this.request(this.createWorker.entry, args);
  }
  /* eslint-disable max-len */
  // Remove an existing worker.  The precise behavior of this method depends
  // on the provider implementing the given worker.  Some providers
  // do not support removing workers at all, and will return a 400 error.
  // Others may begin removing the worker, but it may remain available via
  // the API (perhaps even in state RUNNING) afterward.
  /* eslint-enable max-len */
  removeWorker(...args) {
    this.validate(this.removeWorker.entry, args);

    return this.request(this.removeWorker.entry, args);
  }
  /* eslint-disable max-len */
  // Get the list of all the existing workers in a given worker pool.
  /* eslint-enable max-len */
  listWorkersForWorkerPool(...args) {
    this.validate(this.listWorkersForWorkerPool.entry, args);

    return this.request(this.listWorkersForWorkerPool.entry, args);
  }
  /* eslint-disable max-len */
  // Register a running worker.  Workers call this method on worker start-up.
  // This call both marks the worker as running and returns the credentials
  // the worker will require to perform its work.  The worker must provide
  // some proof of its identity, and that proof varies by provider type.
  /* eslint-enable max-len */
  registerWorker(...args) {
    this.validate(this.registerWorker.entry, args);

    return this.request(this.registerWorker.entry, args);
  }
}
