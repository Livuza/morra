// Automatically generated with Reach 0.1.10 (c934aa69)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (c934aa69)';
export const _backendVersion = 15;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      4: [ctc0, ctc0, ctc1, ctc1],
      6: [ctc0, ctc0, ctc1, ctc2, ctc2, ctc1],
      8: [ctc0, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1],
      10: [ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Null;
  
  
  const v243 = stdlib.protect(ctc0, await interact.setWager(), {
    at: './index.rsh:52:54:application',
    fs: ['at ./index.rsh:51:15:application call to [unknown function] (defined at: ./index.rsh:51:19:function exp)'],
    msg: 'setWager',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v243],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:54:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v243, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v245], secs: v247, time: v246, didSend: v29, from: v244 } = txn1;
      
      sim_r.txns.push({
        amt: v245,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v245], secs: v247, time: v246, didSend: v29, from: v244 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v254, time: v253, didSend: v38, from: v252 } = txn2;
  const v256 = stdlib.add(v245, v245);
  ;
  let v257 = stdlib.checkedBigNumberify('./index.rsh:62:19:decimal', stdlib.UInt_max, '0');
  let v258 = v253;
  let v265 = v256;
  
  while (await (async () => {
    const v269 = stdlib.eq(v257, stdlib.checkedBigNumberify('./index.rsh:64:22:decimal', stdlib.UInt_max, '0'));
    
    return v269;})()) {
    const v276 = stdlib.add(v258, stdlib.checkedBigNumberify('./index.rsh:4:18:decimal', stdlib.UInt_max, '30'));
    const v280 = stdlib.protect(ctc0, await interact.getFingers(), {
      at: './index.rsh:68:54:application',
      fs: ['at ./index.rsh:67:19:application call to [unknown function] (defined at: ./index.rsh:67:23:function exp)'],
      msg: 'getFingers',
      who: 'Alice'
      });
    const v281 = stdlib.protect(ctc0, await interact.getGuess(v280), {
      at: './index.rsh:69:50:application',
      fs: ['at ./index.rsh:67:19:application call to [unknown function] (defined at: ./index.rsh:67:23:function exp)'],
      msg: 'getGuess',
      who: 'Alice'
      });
    const v282 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:53:31:application',
      fs: ['at ./index.rsh:71:56:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:67:19:application call to [unknown function] (defined at: ./index.rsh:67:23:function exp)'],
      msg: 'random',
      who: 'Alice'
      });
    const v283 = stdlib.digest(ctc1, [v282, v280]);
    const v285 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:53:31:application',
      fs: ['at ./index.rsh:74:66:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:67:19:application call to [unknown function] (defined at: ./index.rsh:67:23:function exp)'],
      msg: 'random',
      who: 'Alice'
      });
    const v286 = stdlib.digest(ctc1, [v285, v281]);
    
    const txn3 = await (ctc.sendrecv({
      args: [v244, v252, v265, v276, v283, v286],
      evt_cnt: 2,
      funcNum: 3,
      lct: v258,
      onlyIf: true,
      out_tys: [ctc2, ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v289, v290], secs: v292, time: v291, didSend: v65, from: v288 } = txn3;
        
        ;
        const v293 = stdlib.addressEq(v244, v288);
        ;
        const v300 = stdlib.add(v291, stdlib.checkedBigNumberify('./index.rsh:4:18:decimal', stdlib.UInt_max, '30'));
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v276],
      tys: [ctc3, ctc3, ctc0, ctc0, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v244, v252, v265, v276],
        evt_cnt: 0,
        funcNum: 4,
        lct: v258,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v382, time: v381, didSend: v194, from: v380 } = txn4;
          
          ;
          const v383 = stdlib.addressEq(v244, v380);
          const v384 = stdlib.addressEq(v252, v380);
          const v385 = v383 ? true : v384;
          ;
          sim_r.txns.push({
            amt: v265,
            kind: 'from',
            to: v252,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc3, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v382, time: v381, didSend: v194, from: v380 } = txn4;
      ;
      const v383 = stdlib.addressEq(v244, v380);
      const v384 = stdlib.addressEq(v252, v380);
      const v385 = v383 ? true : v384;
      stdlib.assert(v385, {
        at: 'reach standard library:189:11:dot',
        fs: ['at ./index.rsh:77:91:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc4, await interact.notifyTimeout(), {
        at: './index.rsh:47:33:application',
        fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:45:30:function exp)', 'at ./index.rsh:77:91:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'notifyTimeout',
        who: 'Alice'
        });
      
      return;
      
      }
    else {
      const {data: [v289, v290], secs: v292, time: v291, didSend: v65, from: v288 } = txn3;
      ;
      const v293 = stdlib.addressEq(v244, v288);
      stdlib.assert(v293, {
        at: './index.rsh:77:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v300 = stdlib.add(v291, stdlib.checkedBigNumberify('./index.rsh:4:18:decimal', stdlib.UInt_max, '30'));
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 5,
        out_tys: [ctc0, ctc0],
        timeoutAt: ['time', v300],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v244, v252, v265, v289, v290, v300],
          evt_cnt: 0,
          funcNum: 6,
          lct: v291,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v364, time: v363, didSend: v160, from: v362 } = txn5;
            
            ;
            const v365 = stdlib.addressEq(v244, v362);
            const v366 = stdlib.addressEq(v252, v362);
            const v367 = v365 ? true : v366;
            ;
            sim_r.txns.push({
              amt: v265,
              kind: 'from',
              to: v244,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc3, ctc0, ctc2, ctc2, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v364, time: v363, didSend: v160, from: v362 } = txn5;
        ;
        const v365 = stdlib.addressEq(v244, v362);
        const v366 = stdlib.addressEq(v252, v362);
        const v367 = v365 ? true : v366;
        stdlib.assert(v367, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:84:88:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc4, await interact.notifyTimeout(), {
          at: './index.rsh:47:33:application',
          fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:45:30:function exp)', 'at ./index.rsh:84:88:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'notifyTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v307, v308], secs: v310, time: v309, didSend: v77, from: v306 } = txn4;
        ;
        const v311 = stdlib.addressEq(v252, v306);
        stdlib.assert(v311, {
          at: './index.rsh:84:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v318 = stdlib.add(v309, stdlib.checkedBigNumberify('./index.rsh:4:18:decimal', stdlib.UInt_max, '30'));
        const txn5 = await (ctc.sendrecv({
          args: [v244, v252, v265, v289, v290, v307, v308, v318, v282, v280, v285, v281],
          evt_cnt: 4,
          funcNum: 7,
          lct: v309,
          onlyIf: true,
          out_tys: [ctc0, ctc0, ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:91:15:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v323, v324, v325, v326], secs: v328, time: v327, didSend: v89, from: v322 } = txn5;
            
            ;
            const v329 = stdlib.addressEq(v244, v322);
            ;
            const v330 = stdlib.digest(ctc1, [v323, v324]);
            const v331 = stdlib.digestEq(v289, v330);
            ;
            const v332 = stdlib.digest(ctc1, [v325, v326]);
            const v333 = stdlib.digestEq(v290, v332);
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v318],
          tys: [ctc3, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v244, v252, v265, v289, v290, v307, v308, v318],
            evt_cnt: 0,
            funcNum: 8,
            lct: v309,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v346, time: v345, didSend: v126, from: v344 } = txn6;
              
              ;
              const v347 = stdlib.addressEq(v244, v344);
              const v348 = stdlib.addressEq(v252, v344);
              const v349 = v347 ? true : v348;
              ;
              sim_r.txns.push({
                amt: v265,
                kind: 'from',
                to: v252,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v346, time: v345, didSend: v126, from: v344 } = txn6;
          ;
          const v347 = stdlib.addressEq(v244, v344);
          const v348 = stdlib.addressEq(v252, v344);
          const v349 = v347 ? true : v348;
          stdlib.assert(v349, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:91:113:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc4, await interact.notifyTimeout(), {
            at: './index.rsh:47:33:application',
            fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:45:30:function exp)', 'at ./index.rsh:91:113:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'notifyTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v323, v324, v325, v326], secs: v328, time: v327, didSend: v89, from: v322 } = txn5;
          ;
          const v329 = stdlib.addressEq(v244, v322);
          stdlib.assert(v329, {
            at: './index.rsh:91:15:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v330 = stdlib.digest(ctc1, [v323, v324]);
          const v331 = stdlib.digestEq(v289, v330);
          stdlib.assert(v331, {
            at: 'reach standard library:58:17:application',
            fs: ['at ./index.rsh:92:24:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
            msg: null,
            who: 'Alice'
            });
          const v332 = stdlib.digest(ctc1, [v325, v326]);
          const v333 = stdlib.digestEq(v290, v332);
          stdlib.assert(v333, {
            at: 'reach standard library:58:17:application',
            fs: ['at ./index.rsh:93:24:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
            msg: null,
            who: 'Alice'
            });
          const txn6 = await (ctc.sendrecv({
            args: [v244, v252, v265, v307, v308, v324, v326],
            evt_cnt: 0,
            funcNum: 9,
            lct: v327,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:96:15:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v336, time: v335, didSend: v100, from: v334 } = txn6;
              
              ;
              const v337 = stdlib.addressEq(v244, v334);
              ;
              let v338;
              const v339 = stdlib.eq(v326, v308);
              if (v339) {
                v338 = stdlib.checkedBigNumberify('./index.rsh:9:16:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v340 = stdlib.add(v324, v307);
                const v341 = stdlib.eq(v340, v326);
                if (v341) {
                  v338 = stdlib.checkedBigNumberify('./index.rsh:13:20:decimal', stdlib.UInt_max, '1');
                  }
                else {
                  const v343 = stdlib.eq(v340, v308);
                  if (v343) {
                    v338 = stdlib.checkedBigNumberify('./index.rsh:17:24:decimal', stdlib.UInt_max, '2');
                    }
                  else {
                    v338 = stdlib.checkedBigNumberify('./index.rsh:20:24:decimal', stdlib.UInt_max, '0');
                    }
                  }
                }
              const cv257 = v338;
              const cv258 = v335;
              const cv265 = v265;
              
              await (async () => {
                const v257 = cv257;
                const v258 = cv258;
                const v265 = cv265;
                
                if (await (async () => {
                  const v269 = stdlib.eq(v257, stdlib.checkedBigNumberify('./index.rsh:64:22:decimal', stdlib.UInt_max, '0'));
                  
                  return v269;})()) {
                  const v276 = stdlib.add(v258, stdlib.checkedBigNumberify('./index.rsh:4:18:decimal', stdlib.UInt_max, '30'));
                  sim_r.isHalt = false;
                  }
                else {
                  const v399 = stdlib.eq(v257, stdlib.checkedBigNumberify('./index.rsh:102:39:decimal', stdlib.UInt_max, '1'));
                  const v400 = v399 ? v244 : v252;
                  sim_r.txns.push({
                    amt: v265,
                    kind: 'from',
                    to: v400,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v336, time: v335, didSend: v100, from: v334 } = txn6;
          ;
          const v337 = stdlib.addressEq(v244, v334);
          stdlib.assert(v337, {
            at: './index.rsh:96:15:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          let v338;
          const v339 = stdlib.eq(v326, v308);
          if (v339) {
            v338 = stdlib.checkedBigNumberify('./index.rsh:9:16:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v340 = stdlib.add(v324, v307);
            const v341 = stdlib.eq(v340, v326);
            if (v341) {
              v338 = stdlib.checkedBigNumberify('./index.rsh:13:20:decimal', stdlib.UInt_max, '1');
              }
            else {
              const v343 = stdlib.eq(v340, v308);
              if (v343) {
                v338 = stdlib.checkedBigNumberify('./index.rsh:17:24:decimal', stdlib.UInt_max, '2');
                }
              else {
                v338 = stdlib.checkedBigNumberify('./index.rsh:20:24:decimal', stdlib.UInt_max, '0');
                }
              }
            }
          const cv257 = v338;
          const cv258 = v335;
          const cv265 = v265;
          
          v257 = cv257;
          v258 = cv258;
          v265 = cv265;
          
          continue;
          
          }
        
        }
      
      }
    
    }
  const v399 = stdlib.eq(v257, stdlib.checkedBigNumberify('./index.rsh:102:39:decimal', stdlib.UInt_max, '1'));
  const v400 = v399 ? v244 : v252;
  ;
  stdlib.protect(ctc4, await interact.seeOutcome(v257), {
    at: './index.rsh:106:28:application',
    fs: ['at ./index.rsh:105:9:application call to [unknown function] (defined at: ./index.rsh:105:27:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v245], secs: v247, time: v246, didSend: v29, from: v244 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v245), {
    at: './index.rsh:58:29:application',
    fs: ['at ./index.rsh:57:13:application call to [unknown function] (defined at: ./index.rsh:57:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v244, v245],
    evt_cnt: 0,
    funcNum: 1,
    lct: v246,
    onlyIf: true,
    out_tys: [],
    pay: [v245, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v254, time: v253, didSend: v38, from: v252 } = txn2;
      
      const v256 = stdlib.add(v245, v245);
      sim_r.txns.push({
        amt: v245,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v257 = stdlib.checkedBigNumberify('./index.rsh:62:19:decimal', stdlib.UInt_max, '0');
      const v258 = v253;
      const v265 = v256;
      
      if (await (async () => {
        const v269 = stdlib.eq(v257, stdlib.checkedBigNumberify('./index.rsh:64:22:decimal', stdlib.UInt_max, '0'));
        
        return v269;})()) {
        const v276 = stdlib.add(v258, stdlib.checkedBigNumberify('./index.rsh:4:18:decimal', stdlib.UInt_max, '30'));
        sim_r.isHalt = false;
        }
      else {
        const v399 = stdlib.eq(v257, stdlib.checkedBigNumberify('./index.rsh:102:39:decimal', stdlib.UInt_max, '1'));
        const v400 = v399 ? v244 : v252;
        sim_r.txns.push({
          amt: v265,
          kind: 'from',
          to: v400,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v254, time: v253, didSend: v38, from: v252 } = txn2;
  const v256 = stdlib.add(v245, v245);
  ;
  let v257 = stdlib.checkedBigNumberify('./index.rsh:62:19:decimal', stdlib.UInt_max, '0');
  let v258 = v253;
  let v265 = v256;
  
  while (await (async () => {
    const v269 = stdlib.eq(v257, stdlib.checkedBigNumberify('./index.rsh:64:22:decimal', stdlib.UInt_max, '0'));
    
    return v269;})()) {
    const v276 = stdlib.add(v258, stdlib.checkedBigNumberify('./index.rsh:4:18:decimal', stdlib.UInt_max, '30'));
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 3,
      out_tys: [ctc2, ctc2],
      timeoutAt: ['time', v276],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v244, v252, v265, v276],
        evt_cnt: 0,
        funcNum: 4,
        lct: v258,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v382, time: v381, didSend: v194, from: v380 } = txn4;
          
          ;
          const v383 = stdlib.addressEq(v244, v380);
          const v384 = stdlib.addressEq(v252, v380);
          const v385 = v383 ? true : v384;
          ;
          sim_r.txns.push({
            amt: v265,
            kind: 'from',
            to: v252,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc4, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v382, time: v381, didSend: v194, from: v380 } = txn4;
      ;
      const v383 = stdlib.addressEq(v244, v380);
      const v384 = stdlib.addressEq(v252, v380);
      const v385 = v383 ? true : v384;
      stdlib.assert(v385, {
        at: 'reach standard library:189:11:dot',
        fs: ['at ./index.rsh:77:91:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
        });
      ;
      stdlib.protect(ctc1, await interact.notifyTimeout(), {
        at: './index.rsh:47:33:application',
        fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:45:30:function exp)', 'at ./index.rsh:77:91:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'notifyTimeout',
        who: 'Bob'
        });
      
      return;
      
      }
    else {
      const {data: [v289, v290], secs: v292, time: v291, didSend: v65, from: v288 } = txn3;
      ;
      const v293 = stdlib.addressEq(v244, v288);
      stdlib.assert(v293, {
        at: './index.rsh:77:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v300 = stdlib.add(v291, stdlib.checkedBigNumberify('./index.rsh:4:18:decimal', stdlib.UInt_max, '30'));
      const v304 = stdlib.protect(ctc0, await interact.getFingers(), {
        at: './index.rsh:81:62:application',
        fs: ['at ./index.rsh:80:17:application call to [unknown function] (defined at: ./index.rsh:80:21:function exp)'],
        msg: 'getFingers',
        who: 'Bob'
        });
      const v305 = stdlib.protect(ctc0, await interact.getGuess(v304), {
        at: './index.rsh:82:58:application',
        fs: ['at ./index.rsh:80:17:application call to [unknown function] (defined at: ./index.rsh:80:21:function exp)'],
        msg: 'getGuess',
        who: 'Bob'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v244, v252, v265, v289, v290, v300, v304, v305],
        evt_cnt: 2,
        funcNum: 5,
        lct: v291,
        onlyIf: true,
        out_tys: [ctc0, ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:84:13:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v307, v308], secs: v310, time: v309, didSend: v77, from: v306 } = txn4;
          
          ;
          const v311 = stdlib.addressEq(v252, v306);
          ;
          const v318 = stdlib.add(v309, stdlib.checkedBigNumberify('./index.rsh:4:18:decimal', stdlib.UInt_max, '30'));
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v300],
        tys: [ctc4, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v244, v252, v265, v289, v290, v300],
          evt_cnt: 0,
          funcNum: 6,
          lct: v291,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v364, time: v363, didSend: v160, from: v362 } = txn5;
            
            ;
            const v365 = stdlib.addressEq(v244, v362);
            const v366 = stdlib.addressEq(v252, v362);
            const v367 = v365 ? true : v366;
            ;
            sim_r.txns.push({
              amt: v265,
              kind: 'from',
              to: v244,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc4, ctc0, ctc2, ctc2, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v364, time: v363, didSend: v160, from: v362 } = txn5;
        ;
        const v365 = stdlib.addressEq(v244, v362);
        const v366 = stdlib.addressEq(v252, v362);
        const v367 = v365 ? true : v366;
        stdlib.assert(v367, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:84:88:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.notifyTimeout(), {
          at: './index.rsh:47:33:application',
          fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:45:30:function exp)', 'at ./index.rsh:84:88:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'notifyTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v307, v308], secs: v310, time: v309, didSend: v77, from: v306 } = txn4;
        ;
        const v311 = stdlib.addressEq(v252, v306);
        stdlib.assert(v311, {
          at: './index.rsh:84:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v318 = stdlib.add(v309, stdlib.checkedBigNumberify('./index.rsh:4:18:decimal', stdlib.UInt_max, '30'));
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 4,
          funcNum: 7,
          out_tys: [ctc0, ctc0, ctc0, ctc0],
          timeoutAt: ['time', v318],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v244, v252, v265, v289, v290, v307, v308, v318],
            evt_cnt: 0,
            funcNum: 8,
            lct: v309,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v346, time: v345, didSend: v126, from: v344 } = txn6;
              
              ;
              const v347 = stdlib.addressEq(v244, v344);
              const v348 = stdlib.addressEq(v252, v344);
              const v349 = v347 ? true : v348;
              ;
              sim_r.txns.push({
                amt: v265,
                kind: 'from',
                to: v252,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v346, time: v345, didSend: v126, from: v344 } = txn6;
          ;
          const v347 = stdlib.addressEq(v244, v344);
          const v348 = stdlib.addressEq(v252, v344);
          const v349 = v347 ? true : v348;
          stdlib.assert(v349, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:91:113:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.notifyTimeout(), {
            at: './index.rsh:47:33:application',
            fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:31:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:45:30:function exp)', 'at ./index.rsh:91:113:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'notifyTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v323, v324, v325, v326], secs: v328, time: v327, didSend: v89, from: v322 } = txn5;
          ;
          const v329 = stdlib.addressEq(v244, v322);
          stdlib.assert(v329, {
            at: './index.rsh:91:15:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v330 = stdlib.digest(ctc3, [v323, v324]);
          const v331 = stdlib.digestEq(v289, v330);
          stdlib.assert(v331, {
            at: 'reach standard library:58:17:application',
            fs: ['at ./index.rsh:92:24:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
            msg: null,
            who: 'Bob'
            });
          const v332 = stdlib.digest(ctc3, [v325, v326]);
          const v333 = stdlib.digestEq(v290, v332);
          stdlib.assert(v333, {
            at: 'reach standard library:58:17:application',
            fs: ['at ./index.rsh:93:24:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
            msg: null,
            who: 'Bob'
            });
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 9,
            out_tys: [],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v336, time: v335, didSend: v100, from: v334 } = txn6;
          ;
          const v337 = stdlib.addressEq(v244, v334);
          stdlib.assert(v337, {
            at: './index.rsh:96:15:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          let v338;
          const v339 = stdlib.eq(v326, v308);
          if (v339) {
            v338 = stdlib.checkedBigNumberify('./index.rsh:9:16:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v340 = stdlib.add(v324, v307);
            const v341 = stdlib.eq(v340, v326);
            if (v341) {
              v338 = stdlib.checkedBigNumberify('./index.rsh:13:20:decimal', stdlib.UInt_max, '1');
              }
            else {
              const v343 = stdlib.eq(v340, v308);
              if (v343) {
                v338 = stdlib.checkedBigNumberify('./index.rsh:17:24:decimal', stdlib.UInt_max, '2');
                }
              else {
                v338 = stdlib.checkedBigNumberify('./index.rsh:20:24:decimal', stdlib.UInt_max, '0');
                }
              }
            }
          const cv257 = v338;
          const cv258 = v335;
          const cv265 = v265;
          
          v257 = cv257;
          v258 = cv258;
          v265 = cv265;
          
          continue;
          
          }
        
        }
      
      }
    
    }
  const v399 = stdlib.eq(v257, stdlib.checkedBigNumberify('./index.rsh:102:39:decimal', stdlib.UInt_max, '1'));
  const v400 = v399 ? v244 : v252;
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v257), {
    at: './index.rsh:106:28:application',
    fs: ['at ./index.rsh:105:9:application call to [unknown function] (defined at: ./index.rsh:105:27:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiANAAEIQAYESIgBHgUJCpgBJgMBAAEBACI1ADEYQQTTKmRJIls1ASRbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSEJDEACmkmBBwxAAZ9JJAxAAN1JIQoMQACEIQoSRCELNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/gVBbNf6BYFs1/YAEogVmjrA0/zEAEkQ0/TT+EkEABiI1/EIALDQDgVhbNAMhBlsISTX7NP0SQQAGIzX8QgASNPs0/hJBAAeBAjX8QgADIjX8NP80A1cgIDT8MgY0AyVbQgNrSCQ0ARJENARJIhJMNAISEUQoZClkUEk1A1cgIDX/gAQX/NsusDIGNAMhDFsPRDQDVwAgMQASNP8xABIRRLEisgE0AyVbsggjshA0/7IHs0IDa0gkNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSklXACA1/1cgIDX+JVs1/SEHWzX8gZABWzX7STUFSUoiWzX6JFs1+YEQWzX4gRhbNfeABEAqdTA0+hZQNPkWUDT4FlA09xZQsDIGNAMhDFsMRDT/MQASRDQDV0ggNPoWNPkWUAESRDQDV2ggNPgWNPcWUAESRDT/NP5QNP0WUDT8FlA0+xZQNPkWUDT3FlAoSwFXAGhnSCELNQEyBjUCQgLLSSEEDEAAU0ghBDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABGG0rAywMgY0AyEHWw9ENP8xABI0A1cgIDEAEhFEsSKyATQDJVuyCCOyEDT/sgezQgJVSCEENAESRDQESSISTDQCEhFEKGQpZFBJNQNJSklXACA1/1cgIDX+JVs1/VdIIDX8V2ggNftJNQVJIls1+iRbNfmABLNR9480+hZQNPkWULAyBjQDIQdbDEQ0/jEAEkQyBiEICDX4NP80/lA0/RZQNPxQNPtQNPoWUDT5FlA0+BZQKEsBVwB/ZylLAVd/IWdIJDUBMgY1AkIB10mBAwxAANxJIQUMQABQSCEFNAESRDQESSISTDQCEhFEKGRJNQNXICA1/4AEkSc087AyBjQDIQZbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMlW7III7IQNP+yB7NCAV1IIQU0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf9XICA1/iVbNf1JNQVJVwAgNfxXICA1+4AEHm6C4zT8UDT7ULAyBjQDIQZbDEQ0/zEAEkQyBiEICDX6NP80/lA0/RZQNPxQNPtQNPoWUChLAVcAf2cpSwFXfxFnSCEENQEyBjUCQgD0SSMMQAA6IxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDgSBbNf+ABJqLkXSwNP+IAQI0A1cAIDEAIjIGNP9JCEIARkgiNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULCBoI0GiADINP+IAMMxADT/FlAoSwFXAChnSCM1ATIGNQJCAG41/zX+Nf01/DX7NP0iEkEAJzT+IQgINfo0+zT8UDT/FlA0+hZQKEsBVwBQZ0ghBTUBMgY1AkIANrEisgE0/7III7IQNPw0+zT9IxJNsgezQgAAMRkhCRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 160,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v245",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v245",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v289",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v290",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v307",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v308",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v323",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v324",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v325",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v326",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v289",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v290",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v307",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v308",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v323",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v324",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v325",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v326",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001bc438038062001bc48339810160408190526200002691620001bf565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a1602081015151620000899034146007620000ef565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000e6926002929091019062000119565b5050506200029e565b81620001155760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001279062000261565b90600052602060002090601f0160209004810192826200014b576000855562000196565b82601f106200016657805160ff191683800117855562000196565b8280016001018555821562000196579182015b828111156200019657825182559160200191906001019062000179565b50620001a4929150620001a8565b5090565b5b80821115620001a45760008155600101620001a9565b6000818303604080821215620001d457600080fd5b80518082016001600160401b0380821183831017156200020457634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200021e57600080fd5b8351945060208501915084821081831117156200024b57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200027657607f821691505b602082108114156200029857634e487b7160e01b600052602260045260246000fd5b50919050565b61191680620002ae6000396000f3fe60806040526004361061009a5760003560e01c8063ab53f2c611610061578063ab53f2c614610115578063ad2d91d114610138578063aff5115f1461014b578063c79800371461015e578063de73699814610171578063e533a29d1461018457005b80631e93b0f1146100a35780632c10a159146100c75780633a825029146100da57806383230757146100ed578063a7661d541461010257005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d536600461147c565b610197565b6100a16100e8366004611494565b610305565b3480156100f957600080fd5b506001546100b4565b6100a161011036600461147c565b610620565b34801561012157600080fd5b5061012a6107d6565b6040516100be9291906114a6565b6100a1610146366004611515565b610873565b6100a1610159366004611515565b610acd565b6100a161016c36600461147c565b610d3a565b6100a161017f36600461147c565b610ed1565b6100a161019236600461147c565b6110d1565b6101a76001600054146009611227565b6101c1813515806101ba57506001548235145b600a611227565b6000808055600280546101d390611538565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff90611538565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b50505050508060200190518101906102649190611589565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516102979291906115ee565b60405180910390a16102b0816020015134146008611227565b6102b861135b565b815181516001600160a01b0390911690528051336020918201528082018051600090525143908201528201516102ee908061162b565b6020820151604001526103008161124c565b505050565b6103156008600054146023611227565b61032f8135158061032857506001548235145b6024611227565b60008080556002805461034190611538565b80601f016020809104026020016040519081016040528092919081815260200182805461036d90611538565b80156103ba5780601f1061038f576101008083540402835291602001916103ba565b820191906000526020600020905b81548152906001019060200180831161039d57829003601f168201915b50505050508060200190518101906103d29190611651565b90506103e58160e0015143106025611227565b604080513381528335602080830191909152840135818301529083013560608083019190915283013560808083019190915283013560a08201527fb5f4492f0483ed233efaa2cb34f0ab323e6b41dcb420ae73ce00030dbfd06b489060c00160405180910390a16104583415601f611227565b8051610470906001600160a01b031633146020611227565b604080516104bc9161049691602080870135928701359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260600151146021611227565b60408051606084810135602083015260808501359282019290925261050291016040516020818303038152906040528051906020012060001c8260800151146022611227565b6105546040518060e0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b03908116808352602080850151831681850190815260408087015181870190815260a0808901516060808a0191825260c0808c01516080808d019182528e880135868e019081528f820135848f01908152600a6000554360015589519b8c019c909c529851909b1696890196909652935190870152519685019690965290519483019490945251928101929092525160e0820152610100015b6040516020818303038152906040526002908051906020019061061a9291906113a6565b50505050565b6106306004600054146012611227565b61064a8135158061064357506001548235145b6013611227565b60008080556002805461065c90611538565b80601f016020809104026020016040519081016040528092919081815260200182805461068890611538565b80156106d55780601f106106aa576101008083540402835291602001916106d5565b820191906000526020600020905b8154815290600101906020018083116106b857829003601f168201915b50505050508060200190518101906106ed91906116fd565b905061070181606001514310156014611227565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb19072233836040516107329291906115ee565b60405180910390a161074634156010611227565b805161077a906001600160a01b031633146107705760208201516001600160a01b03163314610773565b60015b6011611227565b80602001516001600160a01b03166108fc82604001519081150290604051600060405180830381858888f193505050501580156107bb573d6000803e3d6000fd5b50600080805560018190556107d29060029061142a565b5050565b6000606060005460028080546107eb90611538565b80601f016020809104026020016040519081016040528092919081815260200182805461081790611538565b80156108645780601f1061083957610100808354040283529160200191610864565b820191906000526020600020905b81548152906001019060200180831161084757829003601f168201915b50505050509050915091509091565b610883600460005414600d611227565b61089d8135158061089657506001548235145b600e611227565b6000808055600280546108af90611538565b80601f01602080910402602001604051908101604052809291908181526020018280546108db90611538565b80156109285780601f106108fd57610100808354040283529160200191610928565b820191906000526020600020905b81548152906001019060200180831161090b57829003601f168201915b505050505080602001905181019061094091906116fd565b90506109586040518060200160405280600081525090565b61096982606001514310600f611227565b7f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d1634338460405161099a92919061177d565b60405180910390a16109ae3415600b611227565b81516109c6906001600160a01b03163314600c611227565b6109d1601e4361162b565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915282516001600160a01b0390811682526020808501519091168183015260408085015181840152858201356060840152858101356080840152835160a084015260066000554360015551610aa29183910181516001600160a01b0390811682526020808401519091169082015260408083015190820152606080830151908201526080808301519082015260a0918201519181019190915260c00190565b60405160208183030381529060405260029080519060200190610ac69291906113a6565b5050505050565b610add6006600054146017611227565b610af781351580610af057506001548235145b6018611227565b600080805560028054610b0990611538565b80601f0160208091040260200160405190810160405280929190818152602001828054610b3590611538565b8015610b825780601f10610b5757610100808354040283529160200191610b82565b820191906000526020600020905b815481529060010190602001808311610b6557829003601f168201915b5050505050806020019051810190610b9a91906117ae565b9050610bb26040518060200160405280600081525090565b610bc38260a0015143106019611227565b7f5371140060fe309c492663b0377a291d12d8d92a35dabb2b67a32d0ade04bb663384604051610bf492919061177d565b60405180910390a1610c0834156015611227565b6020820151610c23906001600160a01b031633146016611227565b610c2e601e4361162b565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b039081168252602080850151909116818301526040808501518184015260608086015190840152608080860151908401528582013560a08401528581013560c0840152835160e084015260086000554360015551610aa29183910160006101008201905060018060a01b038084511683528060208501511660208401525060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b610d4a600660005414601c611227565b610d6481351580610d5d57506001548235145b601d611227565b600080805560028054610d7690611538565b80601f0160208091040260200160405190810160405280929190818152602001828054610da290611538565b8015610def5780601f10610dc457610100808354040283529160200191610def565b820191906000526020600020905b815481529060010190602001808311610dd257829003601f168201915b5050505050806020019051810190610e0791906117ae565b9050610e1b8160a00151431015601e611227565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3383604051610e4c9291906115ee565b60405180910390a1610e603415601a611227565b8051610e94906001600160a01b03163314610e8a5760208201516001600160a01b03163314610e8d565b60015b601b611227565b805160408083015190516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156107bb573d6000803e3d6000fd5b610ee1600a60005414602d611227565b610efb81351580610ef457506001548235145b602e611227565b600080805560028054610f0d90611538565b80601f0160208091040260200160405190810160405280929190818152602001828054610f3990611538565b8015610f865780601f10610f5b57610100808354040283529160200191610f86565b820191906000526020600020905b815481529060010190602001808311610f6957829003601f168201915b5050505050806020019051810190610f9e9190611842565b9050610fbd604051806040016040528060008152602001600081525090565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3384604051610fee9291906115ee565b60405180910390a16110023415602b611227565b815161101a906001600160a01b03163314602c611227565b81608001518260c0015114156110335760008152611080565b81606001518260a00151611047919061162b565b6020820181905260c083015114156110625760018152611080565b81608001518160200151141561107b5760028152611080565b600081525b61108861135b565b825181516001600160a01b039182169052602080850151835192169181019190915282518183018051919091528051439201919091526040808501519151015261061a8161124c565b6110e16008600054146028611227565b6110fb813515806110f457506001548235145b6029611227565b60008080556002805461110d90611538565b80601f016020809104026020016040519081016040528092919081815260200182805461113990611538565b80156111865780601f1061115b57610100808354040283529160200191611186565b820191906000526020600020905b81548152906001019060200180831161116957829003601f168201915b505050505080602001905181019061119e9190611651565b90506111b28160e00151431015602a611227565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb6077633836040516111e39291906115ee565b60405180910390a16111f734156026611227565b805161077a906001600160a01b031633146112215760208201516001600160a01b03163314611224565b60015b60275b816107d25760405163100960cb60e01b81526004810182905260240160405180910390fd5b6040805160208101909152600081526020820151516112ff57601e82602001516020015161127a919061162b565b815260408051608080820183526000808352602080840182815284860183815260608087018581528a51516001600160a01b03908116808a528c51870151821686528c8701518b015185528b5183526004909755436001558951958601969096529251909416968301969096529451918101919091529251908301529060a0016105f6565b6020820151516001146113175781516020015161131b565b8151515b6001600160a01b03166108fc8360200151604001519081150290604051600060405180830381858888f193505050501580156107bb573d6000803e3d6000fd5b604080516080810182526000918101828152606082019290925290819081526020016113a160405180606001604052806000815260200160008152602001600081525090565b905290565b8280546113b290611538565b90600052602060002090601f0160209004810192826113d4576000855561141a565b82601f106113ed57805160ff191683800117855561141a565b8280016001018555821561141a579182015b8281111561141a5782518255916020019190600101906113ff565b50611426929150611467565b5090565b50805461143690611538565b6000825580601f10611446575050565b601f0160209004906000526020600020908101906114649190611467565b50565b5b808211156114265760008155600101611468565b60006040828403121561148e57600080fd5b50919050565b600060a0828403121561148e57600080fd5b82815260006020604081840152835180604085015260005b818110156114da578581018301518582016060015282016114be565b818111156114ec576000606083870101525b50601f01601f191692909201606001949350505050565b60006060828403121561148e57600080fd5b60006060828403121561152757600080fd5b6115318383611503565b9392505050565b600181811c9082168061154c57607f821691505b6020821081141561148e57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461158457600080fd5b919050565b60006040828403121561159b57600080fd5b6040516040810181811067ffffffffffffffff821117156115cc57634e487b7160e01b600052604160045260246000fd5b6040526115d88361156d565b8152602083015160208201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461161c57600080fd5b80604085015250509392505050565b6000821982111561164c57634e487b7160e01b600052601160045260246000fd5b500190565b600061010080838503121561166557600080fd5b6040519081019067ffffffffffffffff8211818310171561169657634e487b7160e01b600052604160045260246000fd5b816040526116a38461156d565b81526116b16020850161156d565b602082015260408401516040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b60006080828403121561170f57600080fd5b6040516080810181811067ffffffffffffffff8211171561174057634e487b7160e01b600052604160045260246000fd5b60405261174c8361156d565b815261175a6020840161156d565b602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03831681526080810161153160208301848035825260208082013590830152604090810135910152565b600060c082840312156117c057600080fd5b60405160c0810181811067ffffffffffffffff821117156117f157634e487b7160e01b600052604160045260246000fd5b6040526117fd8361156d565b815261180b6020840161156d565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b600060e0828403121561185457600080fd5b60405160e0810181811067ffffffffffffffff8211171561188557634e487b7160e01b600052604160045260246000fd5b6040526118918361156d565b815261189f6020840161156d565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c0820152809150509291505056fea2646970667358221220933fe95e5b0cf598d391641c102873e16a5fa93c642f35802973402f8618e89d64736f6c634300080c0033`,
  BytecodeLen: 7108,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:55:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:103:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:65:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:77:91:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:78:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:84:88:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:85:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:91:113:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:94:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
