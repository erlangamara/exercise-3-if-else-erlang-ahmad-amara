var nama = 'Erlang';
var peran = '';

if (nama === '' && peran === ''){
    console.log('Nama harus diisi!');
} else if (nama === 'Erlang' && peran === ''){
    console.log('Halo Erlang, pilih peranmu untuk memulai game!');
} else if (nama === 'Erlang' && peran === 'Ksatria'){
    console.log('Selamat datang di Dunia Proxytia, Erlang');
    console.log('Halo Ksatria Erlang, kamu dapat menyerang dengan senjatamu!');
} else if (nama === 'Erlang' && peran === 'Tabib'){
    console.log('Selamat datang di Dunia Proxytia, Erlang');
    console.log('Halo Tabib Erlang, kamu akan membantu temanmu yang terluka.');
} else if (nama === 'Erlang' && peran === 'Penyihir'){
    console.log('Selamat datang di Dunia Proxytia, Erlang');
    console.log('Halo Penyihir Erlang, ciptakan keajaiban yang membantu kemenanganmu!')
}