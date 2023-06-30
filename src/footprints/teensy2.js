module.exports = {
  params: {
    designator: 'MCU',
    orientation: 'down',
    GND: {type: 'net', value: 'GND'},
    RST: {type: 'net', value: 'RST'},
    VCC: {type: 'net', value: 'VCC'},
    B0: {type: 'net', value: 'B0'},
    B1: {type: 'net', value: 'B1'},
    B2: {type: 'net', value: 'B2'},
    B3: {type: 'net', value: 'B3'},
    B4: {type: 'net', value: 'B4'},
    B5: {type: 'net', value: 'B5'},
    B6: {type: 'net', value: 'B6'},
    B7: {type: 'net', value: 'B7'},
    C6: {type: 'net', value: 'C6'},
    C7: {type: 'net', value: 'C7'},
    D0: {type: 'net', value: 'D0'},
    D1: {type: 'net', value: 'D1'},
    D2: {type: 'net', value: 'D2'},
    D3: {type: 'net', value: 'D3'},
    D4: {type: 'net', value: 'D4'},
    D5: {type: 'net', value: 'D5'},
    D6: {type: 'net', value: 'D6'},
    D7: {type: 'net', value: 'D7'},
    F0: {type: 'net', value: 'F0'},
    F1: {type: 'net', value: 'F1'},
    F2: {type: 'net', value: 'F2'},
    F3: {type: 'net', value: 'F3'},
    F4: {type: 'net', value: 'F4'},
    F5: {type: 'net', value: 'F5'},
    F6: {type: 'net', value: 'F6'},
    F7: {type: 'net', value: 'F7'},
    E6: {type: 'net', value: 'E6'},
  },
  body: p => {
    const standard = `
      (module Teensy2.0 (layer F.Cu) (tedit 5D5219BD)
        (descr 11)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
    
      ${''/* illustration of the (possible) USB port overhang */}
      (fp_line (start 12.7 2.54) (end 8.89 2.54) (layer F.SilkS) (width 0.15))
      (fp_line (start 8.89 2.54) (end 8.89 5.08) (layer F.SilkS) (width 0.15))
      (fp_line (start 8.89 5.08) (end 12.7 5.08) (layer F.SilkS) (width 0.15))
      (fp_line (start 12.7 5.08) (end 12.7 2.54) (layer F.SilkS) (width 0.15))
      (fp_line (start 12.7 -2.54) (end 8.89 -2.54) (layer F.SilkS) (width 0.15))
      (fp_line (start 8.89 -2.54) (end 8.89 0) (layer F.SilkS) (width 0.15))
      (fp_line (start 8.89 0) (end 8.89 1.27) (layer F.SilkS) (width 0.15))
      (fp_line (start 8.89 1.27) (end 12.7 1.27) (layer F.SilkS) (width 0.15))
      (fp_line (start 12.7 1.27) (end 12.7 -2.54) (layer F.SilkS) (width 0.15))
      (fp_line (start -1.27 3.81) (end 6.35 3.81) (layer F.SilkS) (width 0.15))
      (fp_line (start 6.35 3.81) (end 6.35 -3.81) (layer F.SilkS) (width 0.15))
      (fp_line (start 6.35 -3.81) (end -1.27 -3.81) (layer F.SilkS) (width 0.15))
      (fp_line (start -1.27 -3.81) (end -1.27 3.81) (layer F.SilkS) (width 0.15))
      (fp_line (start -7.62 3.81) (end -16.51 3.81) (layer F.SilkS) (width 0.15))
      (fp_line (start -16.51 3.81) (end -16.51 -3.81) (layer F.SilkS) (width 0.15))
      (fp_line (start -16.51 -3.81) (end -7.62 -3.81) (layer F.SilkS) (width 0.15))
      (fp_line (start -7.62 -3.81) (end -7.62 3.81) (layer F.SilkS) (width 0.15))
      (fp_line (start -15.24 -8.89) (end 15.24 -8.89) (layer F.SilkS) (width 0.15))
      (fp_line (start 15.24 -8.89) (end 15.24 8.89) (layer F.SilkS) (width 0.15))
      (fp_line (start 15.24 8.89) (end -15.24 8.89) (layer F.SilkS) (width 0.15))
      (fp_line (start -15.24 8.89) (end -15.24 -8.89) (layer F.SilkS) (width 0.15))
      (fp_poly (pts (xy 3.048 -1.905) (xy 3.683 -1.905) (xy 3.683 -1.651) (xy 3.302 -1.651)
        (xy 3.302 -1.524) (xy 3.683 -1.524) (xy 3.683 -1.27) (xy 3.302 -1.27)
        (xy 3.302 -1.143) (xy 3.683 -1.143) (xy 3.683 -0.889) (xy 3.048 -0.889)) (layer F.SilkS) (width 0.1))
      (fp_poly (pts (xy 3.81 -1.905) (xy 3.81 -0.889) (xy 4.445 -0.889) (xy 4.572 -1.143)
        (xy 4.064 -1.143) (xy 4.064 -1.905)) (layer F.SilkS) (width 0.1))
      (fp_poly (pts (xy 2.921 -0.889) (xy 2.921 -1.905) (xy 1.905 -1.905) (xy 1.905 -0.889)
        (xy 2.159 -0.889) (xy 2.159 -1.651) (xy 2.286 -1.651) (xy 2.286 -0.889)
        (xy 2.54 -0.889) (xy 2.54 -1.651) (xy 2.667 -1.651) (xy 2.667 -0.889)) (layer F.SilkS) (width 0.1))
      (fp_poly (pts (xy 4.064 -2.032) (xy 1.778 -2.032) (xy 1.778 -0.889) (xy 1.524 -0.889)
        (xy 1.524 -2.032) (xy 1.016 -2.032) (xy 1.143 -2.286) (xy 4.064 -2.286)) (layer F.SilkS) (width 0.1))
      (fp_poly (pts (xy 1.397 -0.889) (xy 1.397 -1.905) (xy 1.016 -1.905) (xy 0.635 -0.889)
        (xy 0.889 -0.889) (xy 1.143 -1.651) (xy 1.143 -0.889)) (layer F.SilkS) (width 0.1))
      (fp_poly (pts (xy 0.635 -0.762) (xy 4.445 -0.762) (xy 4.318 -0.508) (xy 0.635 -0.508)) (layer F.SilkS) (width 0.1))
      (fp_text user MEGA32U4 (at 2.54 1.143) (layer F.SilkS)
        (effects (font (size 0.7 0.7) (thickness 0.15)))
      )
      `
    function pins(def_neg, def_pos) {
      return `
        ${''/* extra border around "RAW", in case the rectangular shape is not distinctive enough */}
        (fp_line (start -15.24 ${def_pos}6.35) (end -12.7 ${def_pos}6.35) (layer F.SilkS) (width 0.15))
        (fp_line (start -15.24 ${def_pos}6.35) (end -15.24 ${def_pos}8.89) (layer F.SilkS) (width 0.15))
        (fp_line (start -12.7 ${def_pos}6.35) (end -12.7 ${def_pos}8.89) (layer F.SilkS) (width 0.15))
      
        ${''/* pin names */}
      
        ${''/* and now the actual pins */}
        (pad 15 thru_hole circle (at 13.97 0) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)${p.GND.str})
        
        (pad 1 thru_hole rect (at -13.97 ${def_neg}7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)${p.GND.str})
        (pad 2 thru_hole circle (at -11.43 ${def_neg}7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)${p.B0.str})
        (pad 3 thru_hole circle (at -8.89 ${def_neg}7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)${p.B1.str})
        (pad 4 thru_hole circle (at -6.35 ${def_neg}7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)${p.B2.str})
        (pad 5 thru_hole circle (at -3.81 ${def_neg}7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)${p.B3.str})
        (pad 6 thru_hole circle (at -1.27 ${def_neg}7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)${p.B7.str})
        (pad 7 thru_hole circle (at 1.27 ${def_neg}7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)${p.D0.str})
        (pad 8 thru_hole circle (at 3.81 ${def_neg}7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)${p.D1.str})
        (pad 9 thru_hole circle (at 6.35 ${def_neg}7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)${p.D2.str})
        (pad 10 thru_hole circle (at 8.89 ${def_neg}7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)${p.D3.str})
        (pad 11 thru_hole circle (at 11.43 ${def_neg}7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)${p.C6.str})
        (pad 12 thru_hole circle (at 13.97 ${def_neg}7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)${p.C7.str})
        (pad 13 thru_hole circle (at 13.97 ${def_neg}5.08) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)${p.D5.str})
        (pad 14 thru_hole circle (at 13.97 ${def_neg}2.54) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)${p.VCC.str})
        
        (pad 16 thru_hole circle (at 13.97 ${def_pos}2.54) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)${p.RST.str})
        (pad 17 thru_hole circle (at 13.97 ${def_pos}5.08) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)${p.D4.str})
        (pad 18 thru_hole circle (at 13.97 ${def_pos}7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)${p.D6.str})
        (pad 19 thru_hole circle (at 11.43 ${def_pos}7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)${p.D7.str})
        (pad 20 thru_hole circle (at 8.89 ${def_pos}7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)${p.B4.str})
        (pad 21 thru_hole circle (at 6.35 ${def_pos}7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)${p.B5.str})
        (pad 22 thru_hole circle (at 3.81 ${def_pos}7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)${p.B6.str})
        (pad 23 thru_hole circle (at 1.27 ${def_pos}7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)${p.F7.str})
        (pad 24 thru_hole circle (at -1.27 ${def_pos}7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)${p.F6.str})
        (pad 25 thru_hole circle (at -3.81 ${def_pos}7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)${p.F5.str})
        (pad 26 thru_hole circle (at -6.35 ${def_pos}7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)${p.F4.str})
        (pad 27 thru_hole circle (at -8.89 ${def_pos}7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)${p.F1.str})
        (pad 28 thru_hole circle (at -11.43 ${def_pos}7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)${p.F0.str})
        (pad 29 thru_hole circle (at -13.97 ${def_pos}7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)${p.VCC.str})
        
        (pad 30 thru_hole circle (at -3.81 ${def_neg}5.08) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
        (pad 31 thru_hole circle (at -3.81 ${def_pos}5.08) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
      `
    }
    if(p.orientation == 'down') {
      return `
        ${standard}
        ${pins('-', '')})
        `
    } else {
      return `
        ${standard}
        ${pins('', '-')})
        `
    }
  }
}