var quotes =[
    '“The secret of getting ahead is getting started” – Mark Twain',
    '“The only impossible journey is the one you never begin” – Tony Robbins',
    '“The best way to get started is to quit talking and begin doing” – Walt Disney',
    '“When you know what you want, and want it bad enough, you’ll find a way to get it” – Jim Rohn',
    '“Go confidently in the direction of your dreams. Live the life you have imagined” – Henry David Thoreau',
    '“Take action. An inch of movement will bring you closer to your goals than a mile of intention” – Steve Maraboli',
    '“Knowing is not enough; we must apply. Wishing is not enough; we must do” – Johann Wolfgang von Goethe',
    '“You don’t have to be great to start, but you have to start to be great” – Zig Ziglar',
    '“Dream big and dare to fail” – Norman Vaughan',
    '“If you look really closely, most overnight successes took a long time” – Steve Jobs'
]

function new_quote(){
    var rand_num = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote_display').innerHTML = quotes[rand_num];
}