module.exports = {
  params: {
      designator: 'S',
      from: undefined,
      to: undefined
  },
  body: p => `

(module MH3SS2 (layer F.Cu) (tedit 5E6B44CC)

  ${p.at /* parametric position */}

  (fp_text reference "${p.ref}" (at 0 0.5) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_text value MH3SS2 (at 0 -0.5) (layer F.Fab)
    (effects (font (size 1 1) (thickness 0.15)))
  )

(fp_text user "VCC" (at -2.54 -5.08 unlocked) (layer "F.SilkS")
  (effects (font (size 1 1) (thickness 0.1)) (justify left bottom))
(tstamp 560c09f6-bd7e-411b-9c78-e8b4f124a6c2)
)
(fp_text user "GND" (at -2.54 6.35 unlocked) (layer "F.SilkS")
  (effects (font (size 1 1) (thickness 0.1)) (justify left bottom))
(tstamp d6516127-703a-4c6e-a145-60afefaa1eca)
)
  (fp_line (start -9.5 -9.5) (end 9.5 -9.5) (layer F.SilkS) (width 0.12))
  (fp_line (start 9.5 -9.5) (end 9.5 9.5) (layer F.SilkS) (width 0.12))
  (fp_line (start 9.5 9.5) (end -9.5 9.5) (layer F.SilkS) (width 0.12))
  (fp_line (start -9.5 9.5) (end -9.5 -9.5) (layer F.SilkS) (width 0.12))
  (fp_line (start -8 -8) (end 8 -8) (layer F.SilkS) (width 0.12))
  (fp_line (start 8 -8) (end 8 8) (layer F.SilkS) (width 0.12))
  (fp_line (start 8 8) (end -8 8) (layer F.SilkS) (width 0.12))
  (fp_line (start -8 8) (end -8 -8) (layer F.SilkS) (width 0.12))
  (pad 1 thru_hole circle (at -4 5.75) (size 3 3) (drill 1) (layers *.Cu *.Mask))
  (pad 2 thru_hole circle (at -4 1.917) (size 3 3) (drill 1) (layers *.Cu *.Mask))
  (pad 3 thru_hole circle (at -4 -1.917) (size 3 3) (drill 1) (layers *.Cu *.Mask))
  (pad 4 thru_hole circle (at -4 -5.75) (size 3 3) (drill 1) (layers *.Cu *.Mask))
)

  `
}