const expect = require('expect');
const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const result = generateMessage('Zali', 'Hi');
    expect(result).toInclude({
      from: 'Zali',
      text: 'Hi',
    });
    expect(result.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'Zali';
    const lat = 47.16213550000001;
    const long = 20.18247120000001;
    const message = generateLocationMessage(from, lat, long);

    expect(message).toInclude({
      from,
      url: `https://www.google.com/maps?q=${lat},${long}`,
    });
    expect(message.createdAt).toBeA('number');
  });
});
