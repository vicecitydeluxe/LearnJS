if (-1 || 0) alert( 'first' ); // true || false=true, выполняется alert
if (-1 && 0) alert( 'second' ); // rue && false=false, не выполняется alert
if (null || -1 && 1) alert( 'third' ); // как и ранее выполним первое дейстивие "И", из него получаем результат последний true (оба true), это 1 
// далее получается, что  все выражение у нас true, поэтому выполянется alert
