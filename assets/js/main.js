$(document).ready(function() {
	var numCorrect = 0;
	var total = 0;
	var currIndex = 0;
	var acceptScientificNames = false;
	var acceptCommonNames = false;
	var folderNames = ["Diaphorina_citri","Anoplophora_glabripennis","Aedes_albopictus","Halyomorpha_halys","Cactoblastis_cactorum","Scirtothrips_dorsalis","Anoplophora_chinensis","Tomicus_piniperda","Agrilus_planipennis","Lymantria_dispar","Ips_typographus","Coptotermes_formosanus","Lissachatina_fulica","Homalodisca_vitripennis","Adelges_tsugae","Epiphyas_postvittana","Ceratitis_capitata","Anastrepha_ludens","Pectinophora_gossypiella","Maconellicoccus_hirsutus","Solenopsis_invicta","Diuraphis_noxia","Bemisia_argentifolii","Heterodera_glycines","Alosa_pseudoharengus","Asian_carp","Corbicula_fluminea","Hemigrapsus_sanguineus","Monopterus_albus","Eriocheir_sinensis","Styela_clava","Gymnocephalus_cernuus","Carcinus_maenas","Pterois_volitans","Channa_argus","Potamopyrgus_antipodarum","Myocastor_coypus","Dreissena_bugensis","Neogobius_melanostomus","Orconectes_rusticus","Petromyzon_marinus","Didemnum_vexillum","Bythotrephes_longimanus","Rapana_venosa","Phyllorhiza_punctata","Dreissena_polymorpha","Dioscorea_bulbifera","Elaeagnus_umbellata","Vitex_rotundifolia","Schinus_terebinthifolius","Cirsium_arvense","Triadica_sebifera","Imperata_cylindrica","Rhamnus_cathartica","Dipsacus_fullonum","Linaria_dalmatica","Centaurea_diffusa","Bromus_tectorum","Ficaria_verna","Alliaria_petiolata","Heracleum_mantegazzianum","Lepidium_appelianum","Cynoglossum_officinale","Lygodium_japonicum","Lonicera_japonica","Fallopia_japonica","Spiraea_japonica","Microstegium_vimineum","Sorghum_halepense","Pueraria_montana_var._lobata","Euphorbia_esula","Taeniatherum_caput-medusae","Persicaria_perfoliata","Rosa_multiflora","Carduus_nutans","Lygodium_microphyllum","Paulownia_tomentosa","Centaurea_calcitrapa","Rhaponticum_repens","Elaeagnus_angustifolia","Tamarix_spp","Hypericum_perforatum","Cytisus_scoparius","Onopordum_acanthium","Centaurea_stoebe","Ailanthus_altissima","Solanum_viarum","Lepidium_draba","Striga_asiatica","Centaurea_solstitialis","Linaria_vulgaris","Alternanthera_philoxeroides","Egeria_densa","Caulerpa_taxifolia","Phragmites_australis","Potamogeton_crispus","Didymosphenia_geminata","Myriophyllum_spicatum","Arundo_donax","Salvinia_molesta","Hydrilla_verticillata","Melaleuca_quinquenervia","Lythrum_salicaria","Eichhornia_crassipes","Pistia_stratiotes","Ipomoea_aquatica","Ophiostoma","Sirococcus_clavigignenti-juglandacearum","Ceratocystis_fagacearum","Pseudogymnoascus_destructans","Orbivirus","Flavivirus","H5N5"];
	var speciesNames = ["Asian_Citrus_Psyllid","Asian_Long-Horned_Beetle","Asian_Tiger_Mosquito","Brown_Marmorated_Stink_Bug","Cactus_Moth","Chilli_Thrips","Citrus_Longhorned_Beetle","Common_Pine_Shoot_Beetle","Emerald_Ash_Borer","European_Gypsy_Moth","European_Spruce_Bark_Beetle","Formosan_Subterranean_Termite","Giant_African_Snail","Glassy-Winged_Sharpshooter","Hemlock_Woolly_Adelgid","Light_Brown_Apple_Moth","Mediterranean_Fruit_Fly","Mexican_Fruit_Fly","Pink_Bollworm","Pink_Hibiscus_Mealybug","Red_Imported_Fire_Ant","Russian_Wheat_Aphid","Silverleaf_Whitefly","Soybean_Cyst_Nematode","Alewife","Asian_Carps","Asian_Clam","Asian_Shore_Crab","Asian_Swamp_Eel","Chinese_Mitten_Crab","Clubbed_Tunicate","Eurasian_Ruffe","European_Green_Crab","Lionfish","Northern_Snakehead","New_Zealand_Mud_Snail","Nutria","Quagga_Mussel","Round_Goby","Rusty_Crayfish","Sea_Lamprey","Sea_Squirt","Spiny_Water_Flea","Veined_Rapa_Whelk","White_Spotted_Jellyfish","Zebra_Mussel","Air_Potato","Autumn_Olive","Beach_Vitex","Brazilian_Peppertree","Canada_Thistle","Chinese_Tallow","Cogongrass","Common_Buckthorn","Common_Teasel","Dalmatian_Toadflax","Diffuse_Knapweed","Downy_Brome","Fig_Buttercup","Garlic_Mustard","Giant_Hogweed","Hairy_Whitetop","Houndstongue","Japanese_Climbing_Fern","Japanese_Honeysuckle","Japanese_Knotweed","Japanese_Spiraea","Japanese_Stilt_Grass","Johnsongrass","Kudzu","Leafy_Spurge","Medusahead","Mile-A-Minute_Weed","Multiflora_Rose","Musk_Thistle","Old_World_Climbing_Fern","Princess_Tree","Purple_Star_Thistle","Russian_Knapweed","Russian_Olive","Saltcedar","St._Johnswort","Scotch_Broom","Scotch_Thistle","Spotted_Knapweed","Tree-of-Heaven","Tropical_Soda_Apple","Whitetop","Witchweed","Yellow_Star_Thistle","Yellow_Toadflax","Alligatorweed","Brazilian_Waterweed","Caulerpa,_Mediterranean_Clone","Common_Reed","Curly_Pondweed","Rock_Snot","Eurasian_Watermilfoil","Giant_Reed","Giant_Salvinia","Hydrilla","Melaleuca","Purple_Loosestrife","Water_Hyacinth","Water_Lettuce","Water_Spinach","Dutch_Elm_Disease","Butternut_Canker","Oak_Wilt","Whitenose_Bat_Syndrome","Blue_Tongue_Virus","West_Nile_Virus","Bird_Flu"];
	var currFolder = "";
	var currCommonName = "";

	var getNewImg = function() {
		$("#answer").addClass("hidden");
		var tempIndex = Math.floor(Math.random()*113);
		currFolder = folderNames[tempIndex];
		currIndex = Math.floor(Math.random()*10);
		currCommonName = speciesNames[tempIndex];
		$("#loading-wrapper").removeClass("hidden");
		$("img").addClass("hidden");
		$("#image-container > img").attr('src','/static/imgs/'+currFolder+'/'+currIndex+'.jpg');
		$("#image-container > img").on('load', function() {
			$("#loading-wrapper").addClass("hidden");
			$("img").removeClass("hidden");			
		});
	}
	var result = $("#result");
	var validate = function() {
		var input = $("#answer-box").val().trim().replace(/ /g, '_').toLowerCase();
		//console.log("matches sci name "+(acceptScientificNames&&input===currFolder.toLowerCase()));
		console.log("accepting common names "+acceptCommonNames);
		console.log("input vs ans "+input+" "+currCommonName.toLowerCase());
		if((acceptScientificNames&&input===currFolder.toLowerCase())||(acceptCommonNames && input===currCommonName.toLowerCase())) {
			result.text("Correct!");
			result.removeClass("alert-danger").addClass("alert-success");
			result.removeClass("hidden");
			console.log("correct");
			$("#answer-box").val("");
			$("#answer").addClass("hidden");
			incrementCount(true);
			getNewImg();
		}
		else if (input!=="") {
			result.text("You are wrong!");
			result.addClass("alert-danger").removeClass("alert-success");
			result.removeClass("hidden");
			console.log("incorrect");
			incrementCount(false);
			$("#answer-box").val("");
		}
	};
	var updateAns = function() {
		$("#answer").text(currCommonName.replace(/\_/g, ' ')+"  /  "+currFolder.replace(/\_/g, ' '));
	}

	var incrementCount = function(correct) {
		if (correct) {
			numCorrect++;
			total++;
		}
		else {
			total++;
		}
		$("#correct").text(numCorrect);
		$("#wrong").text(total-numCorrect);
		$("#percent").text(Math.round(numCorrect/total*100)+"%");
	}

	$("#start-game").click( function() {
		$(this).hide();
		$("#options, #instructions-container").hide();
		$("#image-container, #input-container, #stats").removeClass("hidden");
		if ($("#sci-names").prop('checked')) {
			acceptScientificNames = true;
		}
		if ($("#common-names").prop('checked')) {
			acceptCommonNames = true;
		}
		getNewImg();
	})
	$("#skip").click( function() {
		incrementCount(false);
		getNewImg();
	})
	$("#show-ans").click( function() {
		updateAns();
		$("#answer").toggleClass("hidden");
		$(this).toggleClass("fa-eye-slash");
		$(this).toggleClass("fa-eye");
	});
	$("#answer-box").keypress(function (e) {
		console.log(e);
		var key = e.which;
		if (key==13){
			validate();
		}
	});

	$("#close-modal, #help-button").click( function() {
		$('.modal').toggleClass('hidden');
	});
});
