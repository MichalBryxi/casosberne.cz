namespace :scheduler do
  task :fetch => :environment do
    Project.all.each do |project|
      project.fetch
    end
  end

  task :parse => :environment do
    Project.all.each do |project|
      project.parse
    end
  end

  task :gif => :environment do
    Project.all.each do |project|
      project.gif
    end
  end
end
