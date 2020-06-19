module.exports = (function() {
    function word_to_u16(w) {
        var u = 0;
        for (var i = 0; i < 16; ++i) {
            u = u | (w._ === 'Word.1' ? 1 << i : 0);
            w = w.pred;
        };
        return u;
    };

    function u16_to_word(u) {
        var w = {
            _: 'Word.nil'
        };
        for (var i = 0; i < 16; ++i) {
            w = {
                _: (u >>> (16 - i - 1)) & 1 ? 'Word.1' : 'Word.0',
                pred: w
            };
        };
        return w;
    };
    var inst_unit = x => x(1);
    var elim_unit = (x => (() => c0 => {
        var self = x;
        switch (unit) {
            case 'unit':
                return c0;
        }
    })());
    var inst_bool = x => x(true)(false);
    var elim_bool = (x => (() => c0 => c1 => {
        var self = x;
        switch (self ? 'true' : 'false') {
            case 'true':
                return c0;
            case 'false':
                return c1;
        }
    })());
    var inst_nat = x => x(0n)(x0 => 1n + x0);
    var elim_nat = (x => (() => c0 => c1 => {
        var self = x;
        switch (self === 0n ? 'zero' : 'succ') {
            case 'zero':
                return c0;
            case 'succ':
                var $0 = (self - 1n);
                return c1($0);
        }
    })());
    var inst_u16 = x => x(x0 => word_to_u16(x0));
    var elim_u16 = (x => (() => c0 => {
        var self = x;
        switch ('u16') {
            case 'u16':
                var $1 = u16_to_word(self);
                return c0($1);
        }
    })());
    var inst_string = x => x('')(x0 => x1 => (String.fromCharCode(x0) + x1));
    var elim_string = (x => (() => c0 => c1 => {
        var self = x;
        switch (self.length === 0 ? 'nil' : 'cons') {
            case 'nil':
                return c0;
            case 'cons':
                var $2 = self.charCodeAt(0);
                var $3 = self.slice(1);
                return c1($2)($3);
        }
    })());
    var Bool$false = false;
    var Bool$true = true;
    var Cmp$as_eql = (cmp$1 => (() => {
        var self = cmp$1;
        switch (self._) {
            case 'Cmp.ltn':
                return Bool$false;
            case 'Cmp.eql':
                return Bool$true;
            case 'Cmp.gtn':
                return Bool$false;
        }
    })());
    var Cmp$eql = ({
        _: 'Cmp.eql'
    });
    var Cmp$ltn = ({
        _: 'Cmp.ltn'
    });
    var Cmp$gtn = ({
        _: 'Cmp.gtn'
    });
    var Nat$cmp = a$1 => b$2 => {
        var Nat$cmp = a$1 => b$2 => ({
            ctr: 'TCO',
            arg: [a$1, b$2]
        });
        var arg = [a$1, b$2];
        while (true) {
            let [a$1, b$2] = arg;
            var R = (() => {
                var self = a$1;
                switch (self === 0n ? 'zero' : 'succ') {
                    case 'zero':
                        return (() => {
                            var self = b$2;
                            switch (self === 0n ? 'zero' : 'succ') {
                                case 'zero':
                                    return Cmp$eql;
                                case 'succ':
                                    var $4 = (self - 1n);
                                    return Cmp$ltn;
                            }
                        })();
                    case 'succ':
                        var $5 = (self - 1n);
                        return (() => {
                            var self = b$2;
                            switch (self === 0n ? 'zero' : 'succ') {
                                case 'zero':
                                    return Cmp$gtn;
                                case 'succ':
                                    var $6 = (self - 1n);
                                    return Nat$cmp($5)($6);
                            }
                        })();
                }
            })();
            if (R.ctr === 'TCO') arg = R.arg;
            else return R;
        }
    };
    var Nat$eql = a0 => a1 => (a0 === a1);
    var Nat$succ = (pred$1 => 1n + pred$1);
    var Nat$add = a0 => a1 => (a0 + a1);
    var Nat$zero = 0n;
    var Nat$sub = a0 => a1 => (a0 - a1 <= 0n ? 0n : a0 - a1);
    var somatorio = sum$1 => n$2 => {
        var somatorio = sum$1 => n$2 => ({
            ctr: 'TCO',
            arg: [sum$1, n$2]
        });
        var arg = [sum$1, n$2];
        while (true) {
            let [sum$1, n$2] = arg;
            var R = (() => {
                var self = (n$2 === 0n);
                switch (self ? 'true' : 'false') {
                    case 'true':
                        return somatorio((n$2 + sum$1))((n$2 - 1n <= 0n ? 0n : n$2 - 1n));
                    case 'false':
                        return 0n;
                }
            })();
            if (R.ctr === 'TCO') arg = R.arg;
            else return R;
        }
    };
    var exemplo = somatorio(0n)(10000000n);
    return {
        'Bool.false': Bool$false,
        'Bool.true': Bool$true,
        'Cmp.as_eql': Cmp$as_eql,
        'Cmp.eql': Cmp$eql,
        'Cmp.ltn': Cmp$ltn,
        'Cmp.gtn': Cmp$gtn,
        'Nat.cmp': Nat$cmp,
        'Nat.eql': Nat$eql,
        'Nat.succ': Nat$succ,
        'Nat.add': Nat$add,
        'Nat.zero': Nat$zero,
        'Nat.sub': Nat$sub,
        'somatorio': somatorio,
        'exemplo': exemplo,
    };
})();
console.log(module.exports['exemplo']);
