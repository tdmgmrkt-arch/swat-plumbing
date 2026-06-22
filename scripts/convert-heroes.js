const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const dir = path.join(__dirname, "..", "public", "hero-images");
const archive = path.join(dir, "_archive");
if (!fs.existsSync(archive)) fs.mkdirSync(archive, { recursive: true });

const mapping = {
  "5_hero-plumbing-A-licensed-plumber-kneeling-on-a-cle_hero-plumbing_-_A_licensed_plumber_202606161504.jpeg": "hero-plumbing.webp",
  "5_hero-water-heater-A-wall-mounted-residential-tankl_hero-water-heater_-_A_wall-mounted_residential_202606161500.jpeg": "hero-water-heater.webp",
  "1_hero-emergency-plumbers-A-plain-dark-plumbing-serv_hero-emergency-plumbers_-_A_plain_dark_202606161450.jpeg": "hero-emergency-plumbers.webp",
  "2_hero-commercial-plumbers-A-commercial-plumber-insp_hero-commercial-plumbers_-_A_commercial_plumber_202606161501.jpeg": "hero-commercial-plumbers.webp",
  "2_hero-plumbing-fixtures-A-freshly-installed-brushed_hero-water-quality_-_A_clear_glass_202606161514.jpeg": "hero-plumbing-fixtures.webp",
  "5_hero-gas-line-repair-A-licensed-plumbers-hands-thr_hero-gas-line-repair_-_A_licensed_plumber's_202606161511.jpeg": "hero-gas-line-repair.webp",
  "1_hero-plumbing-leak-repairs-A-close-up-of-a-plumber_hero-plumbing-leak-repairs_-_A_close-up_of_202606161512.jpeg": "hero-plumbing-leak-repairs.webp",
  "1_hero-water-line-repairs-An-open-trench-dug-across-_hero-water-line-repairs_-_An_open_trench_202606161457.jpeg": "hero-water-line-repairs.webp",
  "3_hero-residential-plumbing-A-plumber-kneeling-on-a-_hero-residential-plumbing_-_A_plumber_kneeling_202606161509.jpeg": "hero-residential-plumbing.webp",
  "2_hero-sewer-cleaning-A-plumber-operating-a-resident_hero-sewer-cleaning_-_A_plumber_operating_202606161509.jpeg": "hero-sewer-cleaning.webp",
  "3_hero-running-water-A-normal-residential-kitchen-fa_hero-running-water_-_A_normal_residential_202606161515.jpeg": "hero-running-water.webp",
  "5_hero-slab-leak-A-plumber-kneels-on-a-tile-or-LVP-f_hero-slab-leak_-_A_plumber_kneels_202606161507.jpeg": "hero-slab-leak.webp",
  "trenchless repair.jpeg": "hero-trenchless-repair.webp",
  "3_hero-plumbing-pumps-A-plumber-crouched-in-the-util_hero-plumbing-pumps_-_A_plumber_crouched_202606161506.jpeg": "hero-plumbing-pumps.webp",
  "1_hero-clogged-drain-A-plumbers-gloved-hands-feeding_hero-clogged-drain_-_A_plumber's_gloved_202606161508.jpeg": "hero-clogged-drain.webp",
  "3_hero-garbage-disposals-An-under-kitchen-sink-view-_hero-garbage-disposals_-_An_under-kitchen-sink_view_202606161502.jpeg": "hero-garbage-disposals.webp",
  "2_hero-hydro-jetting-A-compact-residential-hydro-jet_hero-hydro-jetting_-_A_compact_residential_202606161412.jpeg": "hero-hydro-jetting.webp",
  "4_hero-main-water-line-repair-A-short-clean-trench-c_hero-main-water-line-repair_-_A_short_clean_202606161514.jpeg": "hero-main-water-line-repair.webp",
  "3_hero-whole-house-repiping-A-wide-angle-view-inside_hero-whole-house-repiping_-_A_wide-angle_view_202606161513.jpeg": "hero-whole-house-repiping.webp",
  "4_hero-sewer-camera-inspections-A-plumber-kneeling-a_hero-sewer-camera-inspections_-_A_plumber_kneeling_202606161510.jpeg": "hero-sewer-camera-inspections.webp",
  "2_hero-plumbing-maintenance-A-plumber-kneeling-on-a-_hero-plumbing-maintenance_-_A_plumber_kneeling_202606161458.jpeg": "hero-plumbing-maintenance.webp",
  "1_hero-sewer-line-repairs-A-neat-backyard-excavation_hero-sewer-line-repairs_-_A_neat_backyard_202606161501.jpeg": "hero-sewer-line-repairs.webp",
  "4_hero-toilet-repair-A-real-North-Texas-suburban-res_hero-toilet-repair_-_A_real_North_202606161506.jpeg": "hero-toilet-repair.webp",
  "4_hero-plumbing-tunneling-A-small-specialty-tunnelin_hero-plumbing-tunneling_-_A_small_specialty_202606161459.jpeg": "hero-plumbing-tunneling.webp",
  "2_hero-tankless-water-heaters-A-residential-tankless_hero-tankless-water-heaters_-_A_residential_tankless_202606161512.jpeg": "hero-tankless-water-heaters.webp",
  "2_hero-tank-heater-installation-A-traditional-50-gal_hero-tank-heater-installation_-_A_traditional_50-gallon_202606161505.jpeg": "hero-tank-heater-installation.webp",
  "1_hero-water-filtration-A-residential-whole-house-wa_hero-water-filtration_-_A_residential_whole-house_202606161504.jpeg": "hero-water-filtration.webp",
  "3_hero-residential-water-treatment-Two-cylindrical-r_hero-residential-water-treatment_-_Two_cylindrical_residential_202606161459.jpeg": "hero-residential-water-treatment.webp",
  "4_hero-water-softener-A-residential-ion-exchange-wat_hero-water-softener_-_A_residential_ion-exchange_202606161503.jpeg": "hero-water-softener.webp",
  "4_hero-reverse-osmosis-An-under-kitchen-sink-view-in_change_the_tech_to_look_202606161518.jpeg": "hero-reverse-osmosis.webp",
};

const toArchive = [
  "3_hero-main-water-line-repair-A-short-clean-trench-c_hero-main-water-line-repair_-_A_short_clean_202606161452.jpeg",
];

(async () => {
  let converted = 0, archived = 0, missing = [], failed = [];
  let totalIn = 0, totalOut = 0;

  for (const src of toArchive) {
    const from = path.join(dir, src);
    const to = path.join(archive, src);
    if (fs.existsSync(from)) {
      fs.renameSync(from, to);
      archived++;
      console.log(`ARCHIVED  ${src}`);
    }
  }

  for (const [src, dest] of Object.entries(mapping)) {
    const from = path.join(dir, src);
    const to = path.join(dir, dest);
    if (!fs.existsSync(from)) {
      missing.push(src);
      console.log(`MISSING   ${src}`);
      continue;
    }
    try {
      const inSize = fs.statSync(from).size;
      await sharp(from)
        .webp({ quality: 85, effort: 5 })
        .toFile(to);
      const outSize = fs.statSync(to).size;
      totalIn += inSize;
      totalOut += outSize;
      fs.unlinkSync(from);
      converted++;
      console.log(`OK        ${dest}  (${(inSize/1024).toFixed(0)}KB → ${(outSize/1024).toFixed(0)}KB, -${(100-outSize/inSize*100).toFixed(0)}%)`);
    } catch (e) {
      failed.push({ src, err: e.message });
      console.log(`FAILED    ${src} — ${e.message}`);
    }
  }

  console.log("\n=== SUMMARY ===");
  console.log(`Converted: ${converted}`);
  console.log(`Archived:  ${archived}`);
  console.log(`Missing:   ${missing.length}`);
  console.log(`Failed:    ${failed.length}`);
  if (totalIn > 0) {
    console.log(`Size:      ${(totalIn/1024/1024).toFixed(1)}MB → ${(totalOut/1024/1024).toFixed(1)}MB (-${(100-totalOut/totalIn*100).toFixed(0)}%)`);
  }
})();
