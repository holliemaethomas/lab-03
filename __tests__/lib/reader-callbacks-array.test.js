'use strict';

jest.mock('fs');

const reader = require('../../lib/reader-callbacks-array.js');

describe('File Reader Module', () => {

  it('when given a bad file, returns an error', () => {
    let files = ['bad.txt'];
    // In jest, throwing errors obviously kills the app, so if you're
    // going to throw one in a test, have the expect execute your code as a
    // function so that you can trap it.
    expect( () => {
      reader(files, (err,data) => {});
    }).toThrow();
  });

  it('when given a real file, returns the contents', done => {
    let files = ['file1.txt'];
    reader(files, (err,data) => {
      expect(err).toBeNull();
      expect(data instanceof Array ).toBeTruthy();
      expect(data.length ).toBe(1);
      done();
    });
  });

  it('reads multiple files', done => {
    let files = ['file1.txt', 'file2.txt'];
    reader(files, (err,data) => {
      expect(err).toBeNull();
      expect(data instanceof Array ).toBeTruthy();
      expect(data.length ).toBe(2);
      done();
    });
  });

});

// I am not sure if I am supposed to have this as starter code. I got this from the class repo for this assignment. If there are any issues please let me know.
