process.stdout.write('prompt > ');

//The stdin 'data' event fires after a user types in a line


module.exports = function() {
    process.stdin.on('data', (data) => {
        const cmd = data.toString().trim();
        process.stdout.write('You typed: ' + cmd + '\n');
        process.stdout.write(process.cwd());
        process.stdout.write('\nprompt > ');
    })
};