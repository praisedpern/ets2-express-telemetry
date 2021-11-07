const { readFile } = require('fs/promises')

exports.readTelemetry = () => {
    return readFile('./data/ets2-test-telemetry.json', {
        encoding: 'utf-8',
    }).then((output) => {
        return output
    })
}
