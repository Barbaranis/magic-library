const livresEnchantes = [
   
        // Livres enchantés
        {
          id: 1,
          categorie: "enchanted",
          titre: "Le Grimoire d'Émeraude",
          prix: "12,99 €",
          image: "/images/livre1.jpg",
          description: "Une jeune sorcière découvre un grimoire ancien capable d’ouvrir des portails vers d’autres mondes..."
        },
        {
          id: 2,
          categorie: "enchanted",
          titre: "L'Archipel des Brumes",
          prix: "15,50 €",
          image: "/images/livre2.jpg",
          description: "Un explorateur se perd dans un archipel dissimulé par les brumes, où chaque île cache un secret oublié."
        },
        {
          id: 3,
          categorie: "enchanted",
          titre: "La Bibliothèque aux Portes Multiples",
          prix: "13,00 €",
          image: "/images/livre3.jpg",
          description: "Une adolescente découvre une bibliothèque où chaque rayon mène à un autre monde..."
        },
        {
          id: 4,
          categorie: "enchanted",
          titre: "Les Montagnes Célestes",
          prix: "11,90 €",
          image: "/images/livre4.jpg",
          description: "Dans un royaume suspendu dans les nuages, une expédition révèle un secret millénaire..."
        },
        {
          id: 5,
          categorie: "enchanted",
          titre: "L’Académie des Ombres",
          prix: "9,99 €",
          image: "/images/livre5.jpg",
          description: "Dans une école secrète, les étudiants manipulent l’ombre comme une source de magie..."
        },
        {
          id: 6,
          categorie: "enchanted",
          titre: "Le Chant de la Prophétie",
          prix: "14,80 €",
          image: "/images/livre6.jpg",
          description: "Des rêves prophétiques guident un jeune paysan vers une destinée magique et bouleversante."
        },
        {
          id: 7,
          categorie: "enchanted",
          titre: "Le Grimoire Vivant",
          prix: "10,50 €",
          image: "/images/livre7.jpg",
          description: "Un ancien livre renfermant les âmes de mages oubliés s’ouvre à celui qui ose prononcer leur nom..."
        },
        {
          id: 8,
          categorie: "enchanted",
          titre: "Entre Rêves et Réalités",
          prix: "16,20 €",
          image: "/images/livre8.jpg",
          description: "Un enfant découvre qu’il peut voyager entre ses rêves et le monde réel, mais chaque rêve a un prix..."
        },
        {
          id: 9,
          categorie: "enchanted",
          titre: "Le Silence du Héros",
          prix: "12,00 €",
          image: "/images/livre9.jpg",
          description: "Un anti-héros est choisi par un artefact magique pour protéger un peuple disparu dans le silence..."
        },
        {
          id: 10,
          categorie: "enchanted",
          titre: "Les Portes d’Aeloria",
          prix: "17,30 €",
          image: "/images/livre10.jpg",
          description: "Les portes d’un royaume ancien s’ouvrent, laissant s’échapper l’oubli. Une quête entre lumière et sacrifice."
        },
      
      
        // Meilleures ventes
        {
          id: 11,
          categorie: "bestsellers",
          titre: "Les Chroniques du Feu",
          prix: "14,90 €",
          image: "/images/meilleure1.jpg",
          description: "Kael découvre un grimoire contenant la magie du feu primordial. Une saga épique de dragons et de rédemption."
        },
        {
          id: 12,
          categorie: "bestsellers",
          titre: "La Cité des Étoiles",
          prix: "13,50 €",
          image: "/images/meilleure2.jpg",
          description: "Une cartographe découvre une étoile en train de s’éteindre dans une cité céleste. Un destin cosmique l’attend."
        },
        {
          id: 13,
          categorie: "bestsellers",
          titre: "Le Grimoire des Ombres",
          prix: "15,00 €",
          image: "/images/meilleure3.jpg",
          description: "Un héritage, une bibliothèque hantée, et une entité ancienne qui attend d’être libérée..."
        },
        {
          id: 14,
          categorie: "bestsellers",
          titre: "La Forêt aux Murmures",
          prix: "12,60 €",
          image: "/images/meilleure4.jpg",
          description: "Une forêt vivante, une herboriste en quête de sa sœur, et des esprits qui ne pardonnent jamais."
        },
        {
          id: 15,
          categorie: "bestsellers",
          titre: "L’Académie des Brumes",
          prix: "13,20 €",
          image: "/images/meilleure5.jpg",
          description: "Un jeune prodige entre dans une école magique interdite. Il y découvrira des secrets capables de changer le monde."
        },
      
      
        // Dernières apparitions
        {
          id: 16,
          categorie: "apparitions",
          titre: "Les Larmes de la Lune",
          prix: "14,90 €",
          image: "/images/apparition1.jpg",
          description: "Elenys est liée à la prophétie d’une lune rouge. Une aventure entre amour interdit et apocalypse lunaire."
        },
        {
          id: 17,
          categorie: "apparitions",
          titre: "L'Écho des Cendres",
          prix: "13,40 €",
          image: "/images/apparition2.jpg",
          description: "Kaël doit raviver les flammes sacrées des volcans oubliés. Chaque souvenir cache une brûlure."
        },
        {
          id: 18,
          categorie: "apparitions",
          titre: "Le Souffle du Néant",
          prix: "15,80 €",
          image: "/images/apparition3.jpg",
          description: "Yris, harpiste maudite, entend une mélodie venue du vide. Chaque note l’approche de l’anéantissement."
        },
        {
          id: 19,
          categorie: "apparitions",
          titre: "Le Labyrinthe de l'Aube",
          prix: "11,90 €",
          image: "/images/apparition4.jpg",
          description: "Deux enfants pénètrent un labyrinthe qui n’existe qu’à l’aube. Derrière chaque mur : un souvenir, un avenir."
        },
        {
          id: 20,
          categorie: "apparitions",
          titre: "L'Ordre du Vent",
          prix: "12,70 €",
          image: "/images/apparition5.jpg",
          description: "L’Ordre du Vent protège les savoirs anciens dans les airs. Une tempête menace l’équilibre du ciel."
        },
        {
          id: 21,
          categorie: "apparitions",
          titre: "L’Archiviste des Brumes",
          prix: "14,50 €",
          image: "/images/apparition6.jpg",
          description: "Un enfant disparu revient avec une page oubliée. Les vérités interdites vont refaire surface."
        },
        {
          id: 22,
          categorie: "apparitions",
          titre: "Les Veilleurs de Verre",
          prix: "13,10 €",
          image: "/images/apparition7.jpg",
          description: "Quand les miroirs se brisent, les Portes de Verre s’ouvrent. Nive seule peut les refermer."
        },
        {
          id: 23,
          categorie: "jeunesse",
          titre: "Le Royaume des Peluches",
          prix: "9,90 €",
          image: "/images/jeunesse1.jpg",
          description: "Une fillette se réveille dans un monde peuplé de peluches vivantes. Ensemble, ils combattent les cauchemars."
        },
        {
          id: 24,
          categorie: "jeunesse",
          titre: "L’École des Nuages",
          prix: "8,70 €",
          image: "/images/jeunesse2.jpg",
          description: "Des enfants sont recrutés pour apprendre à contrôler la météo dans une école perchée dans les cieux."
        },
        {
          id: 25,
          categorie: "manga",
          titre: "Arcanes Zéro",
          prix: "6,95 €",
          image: "/images/manga1.jpg",
          description: "Dans un monde divisé par les éléments, un jeune exilé découvre qu’il est lié à la magie interdite du néant."
        },
        {
          id: 26,
          categorie: "manga",
          titre: "Chroniques de l’Empire Dragon",
          prix: "7,50 €",
          image: "/images/manga2.jpg",
          description: "Yuma veut devenir gardien d’un dragon sacré. Mais pour cela, il devra affronter les héritiers du chaos."
        },
        {
          id: 27,
          categorie: "bd",
          titre: "Les Gardiens d’Althera",
          prix: "12,00 €",
          image: "/images/bd1.jpg",
          description: "Une équipe de héros aux pouvoirs opposés tente de restaurer l’équilibre d’un monde brisé par un dieu déchu."
        },
        {
          id: 28,
          categorie: "bd",
          titre: "Les Chroniques de Fer",
          prix: "11,40 €",
          image: "/images/bd2.jpg",
          description: "Dans une cité mécanique, un enfant découvre qu’il peut comprendre les machines… et qu’elles parlent."
        }
        ,

        {
          id: 29,
          categorie: "science",
          titre: "Le Code de l’Infini",
          prix: "14,20 €",
          image: "/images/science1.jpg",
          description: "Une scientifique pirate une IA quantique et ouvre une porte vers les multivers. Les conséquences sont imprévisibles."
        },
        {
          id: 30,
          categorie: "science",
          titre: "Neuralink : L’Esprit Éveillé",
          prix: "13,80 €",
          image: "/images/science2.jpg",
          description: "Dans un futur proche, l’homme fusionne avec la machine. Mais certains esprits ne supportent pas le lien..."
        },
        {
          id: 31,
          categorie: "bien-etre",
          titre: "Les Jardins Intérieurs",
          prix: "10,90 €",
          image: "/images/bienetre1.jpg",
          description: "Un guide poétique pour explorer ton esprit comme un jardin magique, et retrouver la paix en soi."
        },
        {
          id: 32,
          categorie: "bien-etre",
          titre: "L’Alchimie du Calme",
          prix: "11,60 €",
          image: "/images/bienetre2.jpg",
          description: "Des techniques ancestrales et des rituels doux pour transformer le stress en sérénité."
        },
        {
          id: 33,
          categorie: "voyage",
          titre: "Carnet d’un Nomade Céleste",
          prix: "13,30 €",
          image: "/images/voyage1.jpg",
          description: "Les confessions d’un voyageur qui explore des mondes suspendus entre ciel et mer…"
        },
        {
           id: 34,
           categorie: "voyage",
           titre: "Traversée des Royaumes Perdus",
           prix: "12,50 €",
           image: "/images/voyage2.jpg",
           description: "Un aventurier parcourt des terres oubliées, croisées entre rêve, passé et magie antique."
        }

        
        
      ];
      
      
     
      
      
  
  export default livresEnchantes;
  
  